class ImageDifferenceController < ApplicationController
  def index
	images = [
	  ChunkyPNG::Image.from_file('app/assets/images/before_epic.png'),
	  ChunkyPNG::Image.from_file('app/assets/images/after_epic.png')
	]
  end
end
