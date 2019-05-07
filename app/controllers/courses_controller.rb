class CoursesController < ApplicationController
    before_action :user_courses, only: [:show]

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
        @courses = @courses.where("count < cap_off")
        @courses = @courses.paginate(page: params[:page], per_page: 15)
        @type = isCategories ? params[:filter].capitalize : "All"
  	end

    def create
        @course = Course.find(course_params[:id])

        if @course != nil && current_user.present?
            Enrollment.create user: current_user, course: @course
        end
    end

    def destroy
        if current_user.present?
            current_user.enrollments.find_by_course_id(course_params[:id]).destroy
        end
    end

    private

    def user_courses
        if current_user.present?
            @userCourses = current_user.courses
            @userCoursesCount = @userCourses.size
        end
    end

    def course_params
        params.require(:course).permit(:id)
    end
end
