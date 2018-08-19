class AddColoridToCourses < ActiveRecord::Migration[5.1]
  def change
    add_column :courses, :color_number, :integer
  end
end
