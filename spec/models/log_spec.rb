require "rails_helper"

describe Log do
	let(:long_controller) { "AveryLongControllerNameAveryLongControllerName" }
	let(:long_action) { "AveryLongActionNameAveryLongActionName" }

	it "creates a log if valid credentials are submitted" do
		expect(build(:log)).to be_valid
	end

	it "doesn't create a log if controller is not defined" do
		expect(build(:log, controller: "")).to_not be_valid
	end

	it "doesn't create a log if action is not defined" do
		expect(build(:log, action: "")).to_not be_valid
	end

	it "creates a log if controller and action consists of long names" do
		expect(build(:log, controller: long_controller, action: long_action)).to be_valid
	end
end
