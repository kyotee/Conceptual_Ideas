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
end
