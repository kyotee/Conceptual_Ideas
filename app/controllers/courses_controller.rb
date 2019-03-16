class CoursesController < ApplicationController
	def show
        categories = ["Comp", "Engl", "Fine", "Geog", "Hist", "Math", "Psyc", "Soci"]

		if categories.include? params[:filter].capitalize
            @courses = Course.where(course_type: params[:filter].capitalize).order(:course_id).paginate(page: params[:page], per_page: 15)
            @type = params[:filter].capitalize
        else
            @courses = Course.order(:course_id).paginate(page: params[:page], per_page: 15)
            @type = "All"
    	end
  	end
end
