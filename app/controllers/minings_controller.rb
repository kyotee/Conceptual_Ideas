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
    htmlString1 = ""
    htmlString2 = ""

    begin
      R.eval "library(randomForest)"
      R.eval "library(pROC)"

      R.eval "diseaseData <- read.csv('#{dir}/csv/heart_disease_dataset.csv', header=TRUE, sep=',')"
      R.eval "diseaseData$num <- factor(diseaseData$num)"
      R.eval "diseaseData$sex <- factor(diseaseData$sex)"
      R.eval "diseaseData$cp <- factor(diseaseData$cp)"
      R.eval "diseaseData$fbs <- factor(diseaseData$fbs)"
      R.eval "diseaseData$restecg <- factor(diseaseData$restecg)"
      R.eval "diseaseData$exang <- factor(diseaseData$exang)"
      R.eval "diseaseData$slope <- factor(diseaseData$slope)"
      R.eval "diseaseData$ca <- factor(diseaseData$ca)"
      R.eval "diseaseData$thal <- factor(diseaseData$thal)"
      R.eval "rows <- nrow(diseaseData)"
      R.eval "columns <- ncol(diseaseData)"

      htmlString += "Dataset for evaluation has #{R.rows} rows and #{R.columns} columns (representing features).\n\n"
      htmlString += "Each feature is summarized as follows:\n\n"

      R.eval "ds <- summary(diseaseData)"
      R.eval "capture.output(ds, file = '#{dir}/csv/disease_summary.txt')"

      htmlString1 += "Imputing missing values of features with median of associated known values ...\n\n"

      R.eval "diseaseData[is.na(diseaseData$ca), 'ca'] <- median(diseaseData$ca, na.rm = TRUE)"
      R.eval "diseaseData[is.na(diseaseData$thal), 'thal'] <- median(diseaseData$thal, na.rm = TRUE)"

      htmlString1 += "Splitting dataset into training and testing data (80% and 20% respectively) ...\n\n"

      R.eval "trainingDataSize = ceiling(nrow(diseaseData) * 0.8)"
      R.eval "set.seed(1)"
      R.eval "trainingIndex <- sample(seq_len(nrow(diseaseData)), size = trainingDataSize)"
      R.eval "trainingData <- diseaseData[trainingIndex,]"
      R.eval "testingData <- diseaseData[-trainingIndex,]"

      htmlString1 += "Conducting random forest analysis for classification ...\n\n"

      R.eval "rf <- randomForest(num ~., data = trainingData, ntree=100)"
      R.eval "print(rf)"
      R.eval "capture.output(rf, file = '#{dir}/csv/forest_summary.txt')"
      R.eval "png('#{dir}/csv/random_forest.png', height=400)"
      R.eval "plot(rf)"
      R.eval "text(rf, pretty = 0)"
      R.eval "dev.off()"

      htmlString1 += "Summary of random forest results:\n"
      htmlString2 += "Based on the error rate, random forest has approximately 53% accuracy."
      htmlString2 += "In addition, the AUC for determining if this classifier yields a good prediction (0.5 as bad and 1 as good) is 0.6247:"

      R.eval "predictions <- as.numeric(predict(rf, testingData, type = 'response'))"
      R.eval "rocCurve <- roc(testingData$num, predictions)"
      R.eval "png('#{dir}/csv/random_forest_roc.png', height=400)"
      R.eval "plot(rocCurve)"
      R.eval "dev.off()"
      R.eval "auc(rocCurve)"

    rescue => e
      htmlString += "Failed running R code...\n\n"
      htmlString += "#{e.message}"
    end

    diseaseSummary = IO.read("#{dir}/csv/disease_summary.txt") if File.exist?("#{dir}/csv/disease_summary.txt")
    forestSummary = IO.read("#{dir}/csv/forest_summary.txt") if File.exist?("#{dir}/csv/forest_summary.txt")

    Prawn::Document.new do
        text htmlString, :inline_format => true
        text diseaseSummary
        text "\n"
        text htmlString1, :inline_format => true
        text forestSummary
        image "#{dir}/csv/random_forest.png", :position => :center, :scale => 0.70    
        text "\n"
        text htmlString2
        image "#{dir}/csv/random_forest_roc.png", :position => :center, :scale => 0.70  
    end.render 
  end

  def delete_file
    dir = File.dirname(__FILE__).to_s

    File.delete("#{dir}/csv/disease_summary.txt") if File.exist?("#{dir}/csv/disease_summary.txt")
    File.delete("#{dir}/csv/forest_summary.txt") if File.exist?("#{dir}/csv/forest_summary.txt")
    File.delete("#{dir}/csv/random_forest.png") if File.exist?("#{dir}/csv/random_forest.png.png")
    File.delete("#{dir}/csv/random_forest.png") if File.exist?("#{dir}/csv/random_forest_roc.png")
  end
end
