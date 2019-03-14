class CoursesController < ApplicationController
	def show
		if params[:filter] === "courses"
			@courses = Course.paginate(page: params[:page], per_page: 15)
			@type = "All"
    	elsif params[:filter] === "Math"
    		@courses = Course.where(course_type: "Math").paginate(page: params[:page], per_page: 15)
    		@type = "Math"
    	else
    		
    	end
  	end
end
