require "rails_helper"

describe User do
	let(:another_email) { "testusers@gmail.com" }
	let(:long_user) { "thisshouldntwork" }
	let(:long_email) { "thisemailisover39chacters@gmailnotreallyreal.com" }
	let(:illegal_email) { "abademail@" }
	let(:short_email) { "test" }
	let(:wrong_password_pair1) { "testing12" }
	let(:wrong_password_pair2) { "testing21" }
	let(:null_string) { "" }

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
		create(:user, email: another_email)
		expect(build(:user, email: another_email)).to_not be_valid
	end

	it "doesn't create an account if username is over 12 characters" do
		expect(build(:user, name: long_user)).to_not be_valid
	end	

	it "doesn't create an account if e-mail is over 39 characters" do
		expect(build(:user, email: long_email)).to_not be_valid
	end	

	it "doesn't create an account if e-mail is using illegal syntax" do
		expect(build(:user, email: illegal_email)).to_not be_valid
	end	

	it "doesn't create an account if password and confirm password are under 6 characters" do
		expect(build(:user, password: short_email, password_confirmation: short_email)).to_not be_valid
	end	

	it "doesn't create an account if password and confirm password don't match" do
		expect(build(:user, password: wrong_password_pair1, password_confirmation: wrong_password_pair2)).to_not be_valid
	end

	it "doesn't create an account if an input field is blank" do
		expect(build(:user, name: null_string)).to_not be_valid
		expect(build(:user, email: null_string)).to_not be_valid
		expect(build(:user, password: null_string)).to_not be_valid
		expect(build(:user, password_confirmation: null_string)).to_not be_valid
	end
end
