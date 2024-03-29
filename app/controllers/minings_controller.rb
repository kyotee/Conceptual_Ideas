require "rinruby"
require "prawn"

class MiningsController < ApplicationController
  def index
  end

  def show
    send_data(generate_pdf, :filename => "heart_disease_results.pdf", :type => "application/pdf") 
  end

  private

  def generate_pdf
    dir = File.dirname(__FILE__).to_s
    sample_size = 10
    htmlString = "<b>Running R code for investigating random forest and logistic regression classifiers with use of heart disease dataset ...</b>\n\n"
    htmlString1 = ""
    htmlString2 = ""
    htmlString3 = ""
    htmlString4 = ""
    htmlString5 = ""
    htmlString6 = ""

    begin
      R.eval "library(randomForest)"
      R.eval "library(pROC)"
      R.eval "library(caret)"
      R.eval "library(e1071)"

      R.eval "diseaseData <- read.csv('#{dir}/csv/heart_disease_dataset.csv', header=TRUE, sep=',')"
      R.eval "chclass <-c('numeric','factor','factor','numeric','numeric','factor','factor','numeric','factor','numeric','factor','factor','factor','factor')"
      R.eval "diseaseData <- convert.magic(diseaseData,chclass)"
      R.eval "diseaseData$num[diseaseData$num > 0] <- 1"
      R.eval "rows <- nrow(diseaseData)"
      R.eval "columns <- ncol(diseaseData)"

      htmlString += "Dataset for evaluation has #{R.rows} rows and #{R.columns} columns (representing features).\n\n"
      htmlString += "Each feature is summarized as follows:\n\n"

      R.eval "ds <- summary(diseaseData)"
      R.eval "capture.output(ds, file = '#{dir}/csv/disease_summary.txt')" unless File.exist?("#{dir}/csv/disease_summary.txt")

      htmlString1 += "Imputing missing values of features with median of associated known values ...\n\n"

      R.eval "diseaseData[is.na(diseaseData$ca), 'ca'] <- median(diseaseData$ca, na.rm = TRUE)"
      R.eval "diseaseData[is.na(diseaseData$thal), 'thal'] <- median(diseaseData$thal, na.rm = TRUE)"

      htmlString1 += "Splitting dataset into training and testing data (80% and 20% respectively) ...\n\n"

      R.eval "trainingDataSize = ceiling(nrow(diseaseData) * 0.8)"
      R.eval "set.seed(1)"
      R.eval "trainingIndex <- sample(seq_len(nrow(diseaseData)), size = trainingDataSize)"
      R.eval "trainingData <- diseaseData[trainingIndex,]"
      R.eval "testingData <- diseaseData[-trainingIndex,]"
      R.eval "trainingData$num <- as.factor(trainingData$num)"
      R.eval "testingData$num <- as.factor(testingData$num)"
      R.eval "set.seed(10)"

      htmlString1 += "<b><i>Conducting random forest analysis for classification ...</i></b>\n\n"

      R.eval "rf <- randomForest(num ~., data = trainingData, importance=TRUE, ntree=2000)"
      R.eval "capture.output(rf, file = '#{dir}/csv/forest_summary.txt')" unless File.exist?("#{dir}/csv/forest_summary.txt")

      unless File.exist?("#{dir}/csv/random_forest.png")
        R.eval "png('#{dir}/csv/random_forest.png', height=400)"
        R.eval "plot(rf)"
        R.eval "text(rf, pretty = 0)"
        R.eval "dev.off()"
      end

      htmlString1 += "Summary of random forest results:\n"

      R.eval "forestPredict = predict(rf, testingData)"
      R.eval "confusionMatrix <- table(testingData$num, forestPredict)"
      R.eval "accuracy <- sum(diag(confusionMatrix))/sum(confusionMatrix)"
      R.eval "accuracy"

      R.eval "predictions <- as.numeric(predict(rf, testingData, type = 'response'))"
      R.eval "rocCurve <- roc(testingData$num, predictions)"
      R.eval "auc(rocCurve)"

      unless File.exist?("#{dir}/csv/random_forest_roc.png")
        R.eval "png('#{dir}/csv/random_forest_roc.png', height=400)"
        R.eval "plot(rocCurve)"
        R.eval "dev.off()"
      end

      htmlString2 += "The accuracy of the random forest is approximately 82%.\n\n"
      htmlString2 += "In addition, the AUC for determining if this classifier yields a good prediction (0.5 as bad and 1 as good) is 0.8204:"

      R.eval "importance(rf)"

      unless File.exist?("#{dir}/csv/random_forest_gini.png")
        R.eval "png('#{dir}/csv/random_forest_gini.png', height=400)"
        R.eval "varImpPlot(rf)"
        R.eval "dev.off()"
      end

      htmlString3 += "\n\n\n\n\nThe top three important attributes (based on highest gini indexes) are ca, thal, and cp:\n"
      htmlString4 += "\n\n<b><i>Conducting logistic regression analysis for classification ...</i></b>\n\n"

      R.eval "logisticReg <- glm(num ~., data = trainingData, family='binomial')"
      R.eval "capture.output(logisticReg, file = '#{dir}/csv/regression_summary.txt')" unless File.exist?("#{dir}/csv/regression_summary.txt")

      unless File.exist?("#{dir}/csv/logistic_regression.png")
        R.eval "png('#{dir}/csv/logistic_regression.png', height=400)"
        R.eval "plot(logisticReg)"
        R.eval "text(logisticReg, pretty = 0)"
        R.eval "dev.off()"
      end

      htmlString4 += "Summary of logistic regression results:\n"

      R.eval "regressionPredict = predict(logisticReg, testingData, type='response')"
      R.eval "confusionMatrix <- table(testingData$num, regressionPredict)"
      R.eval "accuracy <- sum(diag(confusionMatrix))/sum(confusionMatrix)"
      R.eval "accuracy"

      R.eval "predictions <- as.numeric(predict(logisticReg, testingData))"
      R.eval "rocCurve <- roc(testingData$num, predictions)"
      R.eval "auc(rocCurve)"

      unless File.exist?("#{dir}/csv/logistic_regression_roc.png")
        R.eval "png('#{dir}/csv/logistic_regression_roc.png', height=400)"
        R.eval "plot(rocCurve)"
        R.eval "dev.off()"
      end

      htmlString5 += "The accuracy of the logistic regression is approximately 88%.\n\n"
      htmlString5 += "In addition, the AUC for determining if this classifier yields a good prediction (0.5 as bad and 1 as good) is 0.8954:"

      R.eval "logisticImp <- varImp(logisticReg)"
      R.eval "capture.output(logisticImp, file = '#{dir}/csv/logistic_regression_score.txt')" unless File.exist?("#{dir}/csv/logistic_regression_score.txt")

      htmlString6 += "\n\nThe top three important attributes (based on highest important scores) are ca, thal, and cp:\n"
    rescue => e
      htmlString += "Failed running R code...\n\n"
      htmlString += "#{e.message}"
    end

    diseaseSummary = IO.read("#{dir}/csv/disease_summary.txt") if File.exist?("#{dir}/csv/disease_summary.txt")
    forestSummary = IO.read("#{dir}/csv/forest_summary.txt") if File.exist?("#{dir}/csv/forest_summary.txt")
    regressionSummary = IO.read("#{dir}/csv/regression_summary.txt") if File.exist?("#{dir}/csv/regression_summary.txt")
    logisticScore = IO.read("#{dir}/csv/logistic_regression_score.txt") if File.exist?("#{dir}/csv/logistic_regression_score.txt")    

    Prawn::Document.new do
        text htmlString, :inline_format => true
        text diseaseSummary
        text "\n"
        text htmlString1, :inline_format => true
        text forestSummary
        image "#{dir}/csv/random_forest.png", :position => :center, :scale => 0.60    
        text "\n"
        text htmlString2, :inline_format => true
        image "#{dir}/csv/random_forest_roc.png", :position => :center, :scale => 0.60  
        text htmlString3, :inline_format => true
        image "#{dir}/csv/random_forest_gini.png", :position => :center, :scale => 0.60  
        text htmlString4, :inline_format => true
        text regressionSummary
        image "#{dir}/csv/logistic_regression.png", :position => :center, :scale => 0.50   
        text "\n"
        text htmlString5, :inline_format => true
        image "#{dir}/csv/logistic_regression_roc.png", :position => :center, :scale => 0.60
        text htmlString6, :inline_format => true
        text logisticScore
    end.render 
  end
end
