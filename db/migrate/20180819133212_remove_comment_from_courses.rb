class RemoveCommentFromCourses < ActiveRecord::Migration[5.1]
  def change
    remove_column :courses, :comment, :string
  end
end
