module ApplicationHelper
	# Title Name Tag
	# PRE: -
	# POST: Appends input title to base title name
	# PARAMS: page_title = input title
	def full_title(page_title = '')
		base_title = "Conceptual Ideas"

		if page_title.empty?
	    	base_title
		else
			page_title + " | " + base_title
		end
	end

	# Message Notifier
	# PRE: Valid color and non-empty message must be specified 
	# POST: Provides react component with notification message aswell as associated type
	# PARAMS: -
	def notify_messsage()
		colorArray = ["Blue", "Green", "Red", "Yellow"]
		color = $color
		message = $message
		$color = $message = nil

		if (colorArray.include? color) && message != nil && message.length > 0
			return color, message
		else
			return nil, nil
		end
	end
end
