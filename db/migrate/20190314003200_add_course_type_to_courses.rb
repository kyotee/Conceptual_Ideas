class AddCourseTypeToCourses < ActiveRecord::Migration[5.1]
  def change
    add_column :courses, :course_type, :string
  end
end
