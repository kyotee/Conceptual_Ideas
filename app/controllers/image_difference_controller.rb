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

	    absMaxYMin = absMaxYMin.sort.uniq

	    localXMin = xMin
	    localXMax = xValue[0]
	    localYMin = absMaxYMin[0]

	    # y-axis tolerance set of 15 pixels
	    absMaxYMin.each_with_index { |y, yIndex|
	    	if (absMaxYMin[yIndex+1] != nil && y+15 < absMaxYMin[yIndex+1]) || y == absMaxYMin[-1]
	    		if y == absMaxYMin[-1]
					xIncrement = 0
				else
					pixelHolder.each_with_index { |arr, idx|
						if arr[1] == localYMin
							localXMin = arr[0]

							localxMinMaxFind = pixelHolder[idx .. -1]
							localxMinMaxFind.each { |arr1|
								if arr1[1] == y
									localXMax = arr1[0]
									break
								end
							}

							break
						end
					}
				end

			    screenshots.last.rect(localXMin, localYMin, localXMax, y, ChunkyPNG::Color.rgb(0,225,255))
			    screenshots.last.rect(localXMin-2, localYMin-2, localXMax+2, y+2, ChunkyPNG::Color.rgb(0,225,255))

			    if y != absMaxYMin[-1]
					localYMin = absMaxYMin[yIndex+1]
	    		end
	    	end
	    }
	  end
	}

	screenshots.last.save('app/assets/images/difference_of_epic.png')
  end

  def show
  end
end
