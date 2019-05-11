require "rinruby"

class MiningsController < ApplicationController
  before_action :mining_test, only: [:index]

  def index

  end

  private

  def mining_test
    sample_size = 10

    htmlString = "<html>"
    htmlString += "<head><title>R Code Test</title></head>"
    htmlString += "<body>"
    htmlString += "<p>Running R code...</p>"
    begin
      R.eval "x <- rnorm(#{sample_size})"
      R.eval "sdx <- sd(x)"
      htmlString += "<p>Succeeded running R code</p>"
      htmlString += "<pre>x = #{R.x}</pre>"
      htmlString += "<pre>sd(x) = #{R.sdx}</pre>"

    rescue => e
      htmlString += "<p>Failed running R code...</p>"
      htmlString += "<p>#{e.message}</p>"
    end

    htmlString += "</html>"

    render html: htmlString.html_safe
  end
end
