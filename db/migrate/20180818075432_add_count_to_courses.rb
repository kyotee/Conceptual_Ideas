class AddCountToCourses < ActiveRecord::Migration[5.1]
  def change
    add_column :courses, :cap_off, :string
  end
end
