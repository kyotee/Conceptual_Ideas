class AddInfoToCourses < ActiveRecord::Migration[5.1]
  def change
    add_column :courses, :description, :string
    add_column :courses, :count, :string
    add_column :courses, :prerequisites, :string
    add_column :courses, :professor, :string
  end
end
