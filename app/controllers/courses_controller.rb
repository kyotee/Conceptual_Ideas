class CoursesController < ApplicationController
	def show
        @sort = params[:sort].capitalize
        categories = ["Comp", "Engl", "Fine", "Geog", "Hist", "Math", "Psyc", "Soci"]
        category = params[:filter].capitalize
        isCategories = categories.include? category
        isDescending = @sort == "Descending"
        @level = params[:level].to_i
        isLevels = @level >= 1 && @level <= 4

        @courses = isCategories ? Course.where(course_type: params[:filter].capitalize) : Course.order(:course_id) 
        @courses = isDescending ? @courses.order('course_id DESC') : @courses.order(:course_id)
        @courses = @courses.where(course_id_num: @level.to_s) if isLevels
        @courses = @courses.paginate(page: params[:page], per_page: 15)
        @type = isCategories ? params[:filter].capitalize : "All"
  	end
end
