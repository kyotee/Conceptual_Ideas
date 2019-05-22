require "rinruby"
require "prawn"
# require 'csv'

class MiningsController < ApplicationController
  after_action :delete_file, only: [:show]

  def index
  end

  def show
    send_data(generate_pdf, :filename => "heart_disease_results.pdf", :type => "application/pdf") 
  end

  private

  def generate_pdf
    sample_size = 10

    htmlString = "Running R code...\n\n"
    begin
      R.eval "mydata <- read.csv('#{File.dirname(__FILE__).to_s}/csv/heart_disease_dataset.csv')"
      R.eval "summary(mydata)"

      R.eval "jpeg('#{File.dirname(__FILE__).to_s}/csv/rplot.png', width = 350, height = 350)"
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
        image "#{File.dirname(__FILE__).to_s}/csv/rplot.png"
        text "LOL"
    end.render 
  end

  def delete_file
    File.delete("#{File.dirname(__FILE__).to_s}/csv/rplot.png") if File.exist?("#{File.dirname(__FILE__).to_s}/csv/rplot.png")
  end
end


# sample Prawn code:
# text "This <i>includes <b>inline</b></i> <font size='24'> \n" +
#          "formatting</font> <b> \n" +
#          "as well</b>", :inline_format => true
