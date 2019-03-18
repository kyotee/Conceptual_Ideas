class CoursesController < ApplicationController
	def show
        @sort = params[:sort].capitalize
        categories = ["Comp", "Engl", "Fine", "Geog", "Hist", "Math", "Psyc", "Soci"]
        category = params[:filter].capitalize
        isCategories = categories.include? category
        isDescending = @sort == "Descending"
        level = params[:level].to_i
        isLevels = level >= 100 && level <= 499

        @courses = isCategories ? Course.where(course_type: params[:filter].capitalize) : Course.order(:course_id) 
        @courses = isDescending ? @courses.order('course_id DESC') : @courses.order(:course_id)
        @courses = @courses.where("course_id like ?", "%#{level}%") if isLevels
        @courses = @courses.paginate(page: params[:page], per_page: 15)

        isCategories ? @type = params[:filter].capitalize : @type = "All"
  	end
end
