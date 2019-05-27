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
    htmlString = "<b>Running R code...</b>\n\n"

    begin
      R.eval "library(randomForest)"

      R.eval "diseaseData <- read.csv('#{dir}/csv/heart_disease_dataset.csv', header=TRUE, sep=',')"
      R.eval "diseaseData$num <- factor(diseaseData$num)"
      R.eval "diseaseData$restecg <- factor(diseaseData$restecg)"
      R.eval "rows <- nrow(diseaseData)"
      R.eval "columns <- ncol(diseaseData)"

      htmlString += "Dataset for evaluation has #{R.rows} rows and #{R.columns} columns.\n\n"
      htmlString += "Imputing missing values of attributes with median of associated known values ...\n\n"

      R.eval "diseaseData[is.na(diseaseData$ca), 'ca'] <- median(diseaseData$ca, na.rm = TRUE)"
      R.eval "diseaseData[is.na(diseaseData$thal), 'thal'] <- median(diseaseData$thal, na.rm = TRUE)"

      htmlString += "Splitting dataset into training and testing data ...\n\n"

      R.eval "trainingDataSize = ceiling(nrow(diseaseData) * 0.8)"
      R.eval "set.seed(1)"
      R.eval "trainingIndex <- sample(seq_len(nrow(diseaseData)), size = trainingDataSize)"
      R.eval "trainingData <- diseaseData[trainingIndex,]"
      R.eval "testingData <- diseaseData[-trainingIndex,]"

      R.eval "rf <- randomForest(num ~., data = trainingData, ntree=100)"
      R.eval "print(rf)"

      R.eval "s <- summary(rf)"
      R.eval "capture.output(s, file = '#{dir}/csv/summary.txt')"      
      R.eval "pf <- summary(diseaseData)"
      R.eval "capture.output(pf, file = '#{dir}/csv/summary1.txt')"          

      # R.eval "decisionTree <- rpart(num ~ age + chol + thal + cp + restecg, data = trainingData)"
      # R.eval "png('#{dir}/csv/decision_tree.png', height=400)" if !File.exist?("#{dir}/csv/decision_tree.png")
      # R.eval "par(mar=c(5,4,0,1)+.1)"
      # R.eval "plot(decisionTree)"
      # R.eval "text(decisionTree, pretty = 0)"
      # R.eval "decisionTree"
      # R.eval "dev.off()"
    rescue => e
      htmlString += "Failed running R code...\n\n"
      htmlString += "#{e.message}"
    end

    textSample = IO.read("#{dir}/csv/summary.txt")
    textSample1 = IO.read("#{dir}/csv/summary1.txt")

    Prawn::Document.new do
        text htmlString, :inline_format => true
        text textSample
        text textSample1
        # image "#{dir}/csv/decision_tree.png", :position => :center, :scale => 0.70
    end.render 
  end

  def delete_file
    dir = File.dirname(__FILE__).to_s

    File.delete("#{dir}/csv/decision_tree.png") if File.exist?("#{dir}/csv/decision_tree.png")
  end
end
