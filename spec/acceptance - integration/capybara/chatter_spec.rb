require "rails_helper"

feature "Viewing Chatter Page" do
	before do
		visit("https://conceptual-ideas.herokuapp.com/")
		go_to_sign_in
	end

	scenario "attempt to visit chatter page without signing in" do
		sleep(2)
		go_to_side_navigation
		click_link("Chatter")
		expect(page).to have_content("You must be signed in to use Chatter.")
	end

	scenario "attempt to visit chatter page signed in" do
		fill_in "verify-email-input", :with => "test-1@fakemail.com"
		fill_in "verify-password-input", :with => "password"
		find("#accept-button").click
		sleep(2)
		go_to_side_navigation
		click_link("Chatter")
		expect(page).to have_content("A Beering Conversation")
		go_to_side_navigation
		click_link("signout_link")
	end
end
