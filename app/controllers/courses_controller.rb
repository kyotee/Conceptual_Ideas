class CoursesController < ApplicationController
	def show
        @sort = params[:sort].capitalize
        categories = ["Comp", "Engl", "Fine", "Geog", "Hist", "Math", "Psyc", "Soci"]

		if categories.include? params[:filter].capitalize
            @courses = Course.where(course_type: params[:filter].capitalize)

            if @sort == "Ascending"
                @courses = @courses.order(:course_id).paginate(page: params[:page], per_page: 15)
            else
                @courses = @courses.order('course_id DESC').paginate(page: params[:page], per_page: 15)
            end              

            @type = params[:filter].capitalize
        else
            @courses = Course.order(:course_id).paginate(page: params[:page], per_page: 15)
            @type = "All"
    	end
  	end
end
