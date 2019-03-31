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
        @course = Course.find_by_course_id(course_params[:course_name])
        puts @course.course_id

        if @course != nil && current_user.present?
            if current_user.courses.where(course_id: @course.course_id).empty?
                Enrollment.create user: current_user, course: @course
            else
                current_user.enrollments.where(course_id: @course.id).destroy_all
            end
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
        params.require(:course).permit(:course_name)
    end
end
