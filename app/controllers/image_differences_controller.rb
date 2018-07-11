class ImageDifferencesController < ApplicationController
  def index
  end

  def show
  	# delayed job option:
  	# - call: Image.delay.detect_difference (detect_difference and difference_generate
  	#         is the same code
  	# - need to add "worker: rake jobs:work" to Procfile
  	# - need to install: gem 'delayed_job_active_record'
    # - need to isntall: gem 'daemons'
  end

  def difference_generate
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

	    absMaxYMin = absMaxYMin.sort.uniq

	    localXMin = xMin
	    localXMax = xValue[0]
	    localYMin = absMaxYMin[0]

	    # y-axis tolerance set of 15 pixels
	    absMaxYMin.each_with_index { |y, yIndex|
	    	if (absMaxYMin[yIndex+1] != nil && y+15 < absMaxYMin[yIndex+1]) || y == absMaxYMin[-1]
	    		findLocalXMin = findLocalXMax = []

				absMaxMin.each_with_index { |arr, idx|
					if arr[1] == localYMin
						findLocalXMin.push(arr[0])
					elsif arr[1] == y
						findLocalXMax.push(arr[0])
					end
				}

				localXMin = findLocalXMin.min
				localXMax = findLocalXMax.max

			    screenshots.last.rect(localXMin-15, localYMin-15, localXMax+15, y+15, ChunkyPNG::Color.rgb(0,225,255))
			    screenshots.last.rect(localXMin-13, localYMin-13, localXMax+13, y+13, ChunkyPNG::Color.rgb(0,225,255))

			    if y == absMaxYMin[-1]
			    	xIncrement = 0
			    else
					localYMin = absMaxYMin[yIndex+1]
	    		end
	    	end
	    }
	  end
	}

	screenshots.last.save('app/assets/images/difference_of_epic.png')
  end

  # handle_asynchronously :difference_generate
end
