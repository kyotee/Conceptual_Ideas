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
    sample_size = 10

    htmlString = "Running R code...\n\n"
    begin
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
    end.render 
  end
end


# sample Prawn code:
# text "This <i>includes <b>inline</b></i> <font size='24'> \n" +
#          "formatting</font> <b> \n" +
#          "as well</b>", :inline_format => true
