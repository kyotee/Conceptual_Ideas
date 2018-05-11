require "rails_helper"

describe User do
	before(:all) do
		@user = build(:user)
	end

	it "creates an account if valid credentials are submitted" do
		expect(@user).to be_valid
	end

	it "hashes and salts passwords that populate in database into 60 characters" do
		expect(@user.password_digest.size).to equal(60)
	end

	it "doesn't create an account if existing e-mail is submitted" do
		create(:user, email: "testusers@gmail.com")
		expect(build(:user, email: "testusers@gmail.com")).to_not be_valid
	end

	it "doesn't create an account if username is over 12 characters" do
		expect(build(:user, name: "thisshouldntwork")).to_not be_valid
	end	

	it "doesn't create an account if e-mail is over 39 characters" do
		expect(build(:user, email: "thisemailisover39chacters@gmailnotreallyreal.com")).to_not be_valid
	end	

	it "doesn't create an account if e-mail is using illegal syntax" do
		expect(build(:user, email: "abademail@")).to_not be_valid
	end	

	it "doesn't create an account if password and confirm password are under 6 characters" do
		expect(build(:user, password: "test", password_confirmation: "test")).to_not be_valid
	end	

	it "doesn't create an account if password and confirm password don't match" do
		expect(build(:user, password: "testing12", password_confirmation: "testing21")).to_not be_valid
	end

	it "doesn't create an account if an input field is blank" do
		expect(build(:user, name: "")).to_not be_valid
		expect(build(:user, email: "")).to_not be_valid
		expect(build(:user, password: "")).to_not be_valid
		expect(build(:user, password_confirmation: "")).to_not be_valid
	end
end
