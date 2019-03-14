class RemoveColorNumberFromCourses < ActiveRecord::Migration[5.1]
  def change
    remove_column :courses, :color_number, :integer
  end
end
