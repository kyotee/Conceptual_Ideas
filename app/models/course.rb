class Course < ApplicationRecord
	has_many :enrollments
	has_many :users, through: :enrollments

  	validates :user_id,   presence: true

  	validates :course_id, presence: true
end
