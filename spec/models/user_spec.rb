require "rails_helper"

describe User do
	before(:all) do
		@user = build(:user)
	end
		
	it "creates an account if valid credentials are submitted" do
		expect(@user).to be_valid
	end

	it "doesn't create an account if existing e-mail is submitted" do
		another_user = build(:user, email: "testuser@gmail.com") # PRE: e-mail already created in DB
		expect(another_user).to_not be_valid
	end

	it "doesn't create an account if username is over 12 characters" do
		another_user = build(:user, name: "thisshouldntwork")
		expect(another_user).to_not be_valid
	end	

	it "doesn't create an account if e-mail is over 39 characters" do
		another_user = build(:user, email: "thisemailisover39chacters@gmailnotreallyreal.com")
		expect(another_user).to_not be_valid
	end	

	it "doesn't create an account if e-mail is using illegal syntax" do
		another_user = build(:user, email: "abademail@")
		expect(another_user).to_not be_valid
	end	

	it "doesn't create an account if password and confirm password are under 6 characters" do
		another_user = build(:user, password: "test", password_confirmation: "test")
		expect(another_user).to_not be_valid
	end	

	it "doesn't create an account if password and confirm password don't match" do
		another_user = build(:user, password: "testing12", password_confirmation: "testing21")
		expect(another_user).to_not be_valid
	end

	it "doesn't create an account if an input field is blank" do
		another_user = build(:user, name: "")
		expect(another_user).to_not be_valid
		another_user = build(:user, email: "")
		expect(another_user).to_not be_valid
		another_user = build(:user, password: "")
		expect(another_user).to_not be_valid
		another_user = build(:user, password_confirmation: "")
		expect(another_user).to_not be_valid
	end	
end
