class AddCourseIdNumToCourses < ActiveRecord::Migration[5.1]
  def change
    add_column :courses, :course_id_num, :string
  end
end
