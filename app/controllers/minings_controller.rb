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
      R.eval "library(rpart)"

      R.eval "diseaseData <- read.csv('#{dir}/csv/heart_disease_dataset.csv', header=TRUE, sep=',')"
      R.eval "diseaseData$num <- factor(diseaseData$num)"
      R.eval "diseaseData$restecg <- factor(diseaseData$restecg)"
      R.eval "rows <- nrow(diseaseData)"
      R.eval "columns <- ncol(diseaseData)"

      htmlString += "Dataset for evaluation has #{R.rows} rows and #{R.columns} columns.\n\n"
      htmlString += "Splitting dataset into training and testing data ...\n\n"

      R.eval "trainingDataSize = ceiling(nrow(diseaseData) * 0.8)"
      R.eval "set.seed(1)"
      R.eval "trainingIndex <- sample(seq_len(nrow(diseaseData)), size = trainingDataSize)"
      R.eval "trainingData <- diseaseData[trainingIndex,]"
      R.eval "testingData <- diseaseData[-trainingIndex,]"

      htmlString += "Imputing missing values of attributes with median of associated known values ...\n\n"

      R.eval "trainingData[is.na(trainingData$ca), 'ca'] <- median(trainingData$ca, na.rm = TRUE)"
      R.eval "trainingData[is.na(trainingData$thal), 'thal'] <- median(trainingData$thal, na.rm = TRUE)"
      R.eval "testingData[is.na(testingData$ca), 'ca'] <- median(testingData$ca, na.rm = TRUE)"
      R.eval "testingData[is.na(testingData$thal), 'thal'] <- median(testingData$thal, na.rm = TRUE)"

      htmlString += "Explaination of features selected for decision tree:\n"
      htmlString += "<i>age - </i>\n"
      htmlString += "<i>chol - </i>\n"
      htmlString += "<i>thal - </i>\n"
      htmlString += "<i>cp - </i>\n"
      htmlString += "<i>restecg - </i>\n\n"
      htmlString += "Explaination of features not selected for decision tree:\n"
      htmlString += "<i>trestbps - </i>\n"
      htmlString += "<i>fbs - </i>\n"
      htmlString += "<i>thalach - </i>\n"
      htmlString += "<i>exang - </i>\n"
      htmlString += "<i>oldpeak - </i>\n"
      htmlString += "<i>slope - </i>\n"
      htmlString += "<i>ca - </i>\n"
      htmlString += "<i>sex - </i>\n\n"

      R.eval "decisionTree <- rpart(num ~ age + chol + thal + cp + restecg, data = trainingData)"
      R.eval "png('#{dir}/csv/decision_tree.png', height=400)" if !File.exist?("#{dir}/csv/decision_tree.png")
      R.eval "par(mar=c(5,4,0,1)+.1)"
      R.eval "plot(decisionTree)"
      R.eval "text(decisionTree, pretty = 0)"
      R.eval "decisionTree"
      R.eval "dev.off()"

      R.eval "treePredict = predict(decisionTree, testingData, type='class')"
      R.eval "confusionMatrix <- table(testingData$num, treePredict)"
      R.eval "accuracy <- sum(diag(confusionMatrix))/sum(confusionMatrix)"
      R.eval "accuracy"
    rescue => e
      htmlString += "Failed running R code...\n\n"
      htmlString += "#{e.message}"
    end

    Prawn::Document.new do
        text htmlString, :inline_format => true
        image "#{dir}/csv/decision_tree.png", :position => :center, :scale => 0.70
    end.render 
  end

  def delete_file
    dir = File.dirname(__FILE__).to_s

    File.delete("#{dir}/csv/decision_tree.png") if File.exist?("#{dir}/csv/decision_tree.png")
  end
end
