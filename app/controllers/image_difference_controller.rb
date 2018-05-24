class ImageDifferenceController < ApplicationController
  def index
	screenshots = [
	  ChunkyPNG::Image.from_file('app/assets/images/before_epic.png'),
	  ChunkyPNG::Image.from_file('app/assets/images/after_epic.png')
	]

	difference = []
	pixelHolder = []
	xMin = xMinIndex = xIncrement = 0

	screenshots.first.height.times do |y|
	  screenshots.first.row(y).each_with_index do |pixel, x|
	    difference << [x,y] unless pixel == screenshots.last[x,y]
	  end
	end

	x, y = difference.map{ |xy| xy[0] }, difference.map{ |xy| xy[1] }
	pixels = x.length

	# x and y axis pixel pairs
	pixels.times { |i|
	  arrXy = [x[i], y[i]]
	  pixelHolder[i] = arrXy
	}

	pixelHolder = pixelHolder.sort_by {|k| k[0]}.uniq(&:first)

	pixelHolder.each_with_index { |xValue, xIndex|
	  if xIncrement == 0
	    xMin = xValue[0]
	    xMinIndex = xIndex
	  end

	  xIncrement = xIncrement + 1

	  # x-axis tolerance set to 15 pixels
	  if (pixelHolder[xIndex+1] != nil && xValue[0]+15 < pixelHolder[xIndex+1][0]) || xValue[0] == pixelHolder[-1][0]
	    absMaxYMin = []
	    absMaxMin = pixelHolder[xMinIndex .. xIndex]

	    absMaxMin.each { |y|
	      absMaxYMin.push(y[1])
	    }

	    absMaxYMin = absMaxYMin.sort

	    # y-axis tolerance set of 15 pixels
	    absMaxYMin.each_with_index { |y, yIndex|
	    	if (absMaxYMin[yIndex+1] != nil && y+15 < absMaxYMin[yIndex+1]) || y == absMaxYMin[-1]
			    screenshots.last.rect(xMin, absMaxYMin.min, xValue[0], absMaxYMin.max, ChunkyPNG::Color.rgb(0,225,255))
			    screenshots.last.rect(xMin-2, absMaxYMin.min-2, xValue[0]+2, absMaxYMin.max+2, ChunkyPNG::Color.rgb(0,225,255))
			    xIncrement = 0   # need to be manipulated
	    	end
	    }
	  end
	}

	screenshots.last.save('app/assets/images/difference_of_epic.png')
  end

  def show
  end
end
