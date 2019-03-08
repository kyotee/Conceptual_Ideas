require "rails_helper"

describe Chatter do
	let(:long_text) { "AveryLongTextAveryLongTextAveryLongTextAveryLongTextAveryLongText
		AveryLongTextAveryLongTextAveryLongTextAveryLongTextAveryLongTextAveryLongText
		AveryLongTextAveryLongTextAveryLongTextAveryLongTextAveryLongTextAveryLongText
		AveryLongTextAveryLongTextAveryLongTextAveryLongTextAveryLongTextAveryLongText" }

	it "creates a message if valid credentials are submitted" do
		expect(build(:chatter)).to be_valid
	end

	it "doesn't create a message if input is not defined" do
		expect(build(:chatter, message: "")).to_not be_valid
	end

	it "creates a message if input consists of long text" do
		expect(build(:chatter, message: long_text)).to be_valid
	end
end
