require "rinruby"

class MiningsController < ApplicationController
  before_action :mining_test, only: [:index]

  def index

  end

  private

  def mining_test
  	sample_size = 10
  	R.eval "x <- rnorm(#{sample_size})"
  	R.eval "summary(x)"
  	R.eval "sd(x)"
  	R.eval "plot(x)"
  end
end
