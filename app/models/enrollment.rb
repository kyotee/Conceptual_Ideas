class Enrollment < ApplicationRecord
  belongs_to :user
  belongs_to :course

  before_save :maximum_courses

  private

  def maximum_courses
  	if user.courses.count >= 5
  		throw(:abort)
  	end
  end
end
