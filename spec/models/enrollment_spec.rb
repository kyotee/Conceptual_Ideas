require "rails_helper"

describe Enrollment do
	let(:nil_id) { nil }

	it "creates an enrollment if valid credentials are submitted" do
		expect(build(:enrollment)).to be_valid
	end

	it "creates up to 5 enrollments" do
		create(:user)
		create(:course)

		5.times do 
			create(:enrollment, user_id: 1, course_id: 1)
		end

		expect(User.find(1).courses.count).to equal(5)
	end


	it "doesn't create an enrollment if an input field is blank" do
		expect(build(:enrollment, user_id: nil_id)).to_not be_valid
		expect(build(:enrollment, course_id: nil_id)).to_not be_valid
	end
end
