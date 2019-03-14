class CoursesController < ApplicationController
	def show
		if params[:filter] == "all"
			@courses = Course.paginate(page: params[:page], per_page: 15)
    	end
  	end
end
