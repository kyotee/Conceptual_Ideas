require "rails_helper"

feature "Viewing User Monitoring Pages" do
	before do
		visit("https://conceptual-ideas.herokuapp.com/")
		go_to_sign_in
	end

	scenario "attempt to visit monitoring pages without admin privelges" do
		fill_in "verify-email-input", :with => "test-1@fakemail.com"
		fill_in "verify-password-input", :with => "password"
		find("#accept-button").click
		sleep(2)
		visit("https://conceptual-ideas.herokuapp.com/user_monitoring")
		expect(page).to have_content("Sign Up Form")
		visit("https://conceptual-ideas.herokuapp.com/user_monitoring_profile/1")
		expect(page).to have_content("Sign Up Form")
		go_to_side_navigation
		click_link("signout_link")
	end

	scenario "attempt to visit monitoring pages with admin privelges" do
		fill_in "verify-email-input", :with => "admin@hotmail.com"
		fill_in "verify-password-input", :with => "admin1"
		find("#accept-button").click
		sleep(2)
		click_link("User Monitoring")
		expect(page).to have_content("User Monitoring")
		sleep(2)
		go_to_side_navigation
		click_link("User Monitoring")
		expect(page).to have_content("User Monitoring")

		within('tbody > tr:nth-child(2)') do
			page.all('a')[0].click
		end

		expect(page).to have_content("IP Address")
		go_to_side_navigation
		click_link("signout_link")
	end
end
