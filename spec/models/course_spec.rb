require "rails_helper"

describe Course do
	let(:long_course_name) { "Comp-1234" }
	let(:invalid_index) { "22" }
	let(:invalid_course_type) { "Compp" }
	let(:long_description) { "Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
	    when an unknown printer took a galley of type and scrambled it to make a type
	    specimen book. It has survived not only five centuries, but also the blank." }
	let(:null_string) { "" }

	it "creates a course if valid credentials are submitted" do
		expect(build(:course)).to be_valid
	end

	it "creates a course if existing course is submitted" do
		create(:course)
		expect(build(:course)).to be_valid
	end

	it "doesn't create a course if name is over 8 characters" do
		expect(build(:course, course_id: long_course_name)).to_not be_valid
	end

	it "doesn't create a course if index is over 1 characters" do
		expect(build(:course, course_id_num: invalid_index)).to_not be_valid
	end

	it "doesn't create a course if description is over 275 characters" do
		expect(build(:course, description: long_description)).to_not be_valid
	end

	it "doesn't create a course if prerequisite is over 8 characters" do
		expect(build(:course, prerequisites: long_course_name)).to_not be_valid
	end

	it "doesn't create a course if type is over 4 characters" do
		expect(build(:course, course_type: invalid_course_type)).to_not be_valid
	end

	it "doesn't create a course if an input field is blank" do
		expect(build(:course, course_id: null_string)).to_not be_valid
		expect(build(:course, course_id_num: null_string)).to_not be_valid
		expect(build(:course, description: null_string)).to_not be_valid
		expect(build(:course, professor: null_string)).to_not be_valid
		expect(build(:course, count: null_string)).to_not be_valid
		expect(build(:course, cap_off: null_string)).to_not be_valid
		expect(build(:course, prerequisites: null_string)).to_not be_valid
		expect(build(:course, start_date: null_string)).to_not be_valid
		expect(build(:course, end_date: null_string)).to_not be_valid
		expect(build(:course, course_type: null_string)).to_not be_valid
	end
end
