class AddDatesToCourses < ActiveRecord::Migration[5.1]
  def change
    add_column :courses, :start_date, :string
    add_column :courses, :end_date, :string
  end
end
