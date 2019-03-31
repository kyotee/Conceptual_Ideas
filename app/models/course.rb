class Course < ApplicationRecord
	has_many :enrollments
	has_many :users, through: :enrollments

	validates :course_id,       presence: true, length: { maximum: 8 }

	validates :course_id_num,   presence: true, length: { maximum: 1 }

	validates :description,     presence: true, length: { maximum: 275 }

	validates :professor,       presence: true

	validates :count,           presence: true

	validates :cap_off,         presence: true

	validates :prerequisites,   presence: true, length: { maximum: 8 }

	validates :start_date,      presence: true

	validates :end_date,        presence: true

	validates :course_type,     presence: true, length: { maximum: 4 }
end
