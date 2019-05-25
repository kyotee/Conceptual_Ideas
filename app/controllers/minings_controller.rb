require "rinruby"
require "prawn"

class MiningsController < ApplicationController
  after_action :delete_file, only: [:show]

  def index
  end

  def show
    send_data(generate_pdf, :filename => "heart_disease_results.pdf", :type => "application/pdf") 
  end

  private

  def generate_pdf
    dir = File.dirname(__FILE__).to_s
    sample_size = 10
    htmlString = "Running R code...\n\n"

    begin
      R.eval "diseaseData <- read.csv('#{dir}/csv/heart_disease_dataset.csv', header=TRUE, sep=',')"
      R.eval "diseaseData$num <- factor(diseaseData$num)"

      R.eval "trainingDataSize = ceiling(nrow(diseaseData) * 0.8)"
      R.eval "set.seed(1)"
      R.eval "trainingIndex <- sample(seq_len(nrow(diseaseData)), size = trainingDataSize)"
      R.eval "trainingData <- diseaseData[trainingIndex,]"
      R.eval "testingData <- diseaseData[-trainingIndex,]"

      R.eval "trainingData[is.na(trainingData$ca), 'ca'] <- median(trainingData$ca, na.rm = TRUE)"
      R.eval "trainingData[is.na(trainingData$thal), 'thal'] <- median(trainingData$thal, na.rm = TRUE)"
      R.eval "testingData[is.na(testingData$ca), 'ca'] <- median(testingData$ca, na.rm = TRUE)"
      R.eval "testingData[is.na(testingData$thal), 'thal'] <- median(testingData$thal, na.rm = TRUE)"


      # template code for pdf (above is real code)
      R.eval "mydata <- read.csv('#{dir}/csv/heart_disease_dataset.csv')"
      R.eval "summary(mydata)"
      R.eval "jpeg('#{dir}/csv/rplot.png', width = 350, height = 350)" if !File.exist?("#{dir}/csv/rplot.png")
      R.eval "plot(mydata)"
      R.eval "dev.off()"
      R.eval "x <- rnorm(#{sample_size})"
      R.eval "sdx <- sd(x)"
      htmlString += "Succeeded running R code\n\n"
      htmlString += "x = #{R.x}\n\n"
      htmlString += "sd(x) = #{R.sdx}\n\n"
    rescue => e
      htmlString += "Failed running R code...\n\n"
      htmlString += "#{e.message}"
    end

    Prawn::Document.new do
        text htmlString, :inline_format => true
        image "#{dir}/csv/rplot.png"
        text "< More Information >"
    end.render 
  end

  def delete_file
    dir = File.dirname(__FILE__).to_s

    File.delete("#{dir}/csv/rplot.png") if File.exist?("#{dir}/csv/rplot.png")
  end
end


# sample Prawn code:
# text "This <i>includes <b>inline</b></i> <font size='24'> \n" +
#          "formatting</font> <b> \n" +
#          "as well</b>", :inline_format => true
