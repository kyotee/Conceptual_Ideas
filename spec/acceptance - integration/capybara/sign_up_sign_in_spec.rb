require "rails_helper"

feature "Visitor Signs Up with E-mail that Already Exists" do
	before do
		visit("https://conceptual-ideas.herokuapp.com/")
		go_to_sign_up
	end

	scenario "no specification text present if input fields aren't visited" do
		expect(page).to have_no_content("between 1 to 12 letters")
		expect(page).to have_no_content("valid e-mail under 40 characters")
		expect(page).to have_no_content("between 6 to 12 characters")
		expect(page).to have_no_content("matches password")
	end

	scenario "specification text present if input fields are visited" do		
		find("#verify-name-input").click
		expect(page).to have_content("between 1 to 12 letters")
		find("#verify-email-input").click
		expect(page).to have_content("valid e-mail under 40 characters")
		find("#verify-password-input").click
		expect(page).to have_content("between 6 to 12 characters")
		find("#verify-password-confirm-input").click
		expect(page).to have_content("matches password")
	end

	scenario "clicking Sign up button without proper input won't re-direct to another page" do
		find("#accept-button").click
		expect(page).to have_content("Sign up")
	end

	scenario "submitting credentials with existing e-mail will yield error message" do
		fill_in "verify-name-input", :with => "admin"
		fill_in "verify-email-input", :with => "admin@hotmail.com"
		fill_in "verify-password-input", :with => "admin1"
		fill_in "verify-password-confirm-input", :with => "admin1"
		find("#accept-button").click
		sleep(2)
		expect(page).to have_content("E-mail already exists.")
	end
end

feature "Existing User Signs In" do
	before do
		visit("https://conceptual-ideas.herokuapp.com/")
		go_to_sign_in
	end

	scenario "clicking Sign in button without proper input won't re-direct to another page" do
		find("#accept-button").click
		expect(page).to have_content("Sign in")
	end

	scenario "user signs in with incorrect credentials" do
		fill_in "verify-email-input", :with => "admin@hotmail.com1"
		fill_in "verify-password-input", :with => "admin11"
		find("#accept-button").click
		sleep(2)
		expect(page).to have_content("Invalid credentials submitted.")
	end

	scenario "clicking Sign up now link will redirect to sign up page" do
		find("#signing-up").click
		expect(page).to have_content("Sign up")
	end

	scenario "side navigation should have sign up and sign in links" do
		sleep(2)
		go_to_side_navigation

		within("div#side-navigate") do
			expect(page).to have_content("Sign up")
			expect(page).to have_content("Sign in")
		end
	end

	scenario "user signs in with correct credentials and navigation will have sign out link" do
		fill_in "verify-email-input", :with => "admin@hotmail.com"
		fill_in "verify-password-input", :with => "admin1"
		find("#accept-button").click
		sleep(2)  # need to investigate multiple http request problem

		go_to_side_navigation

		within("div#side-navigate") do
			expect(page).to have_no_content("Sign up")
			expect(page).to have_no_content("Sign in")
			expect(page).to have_content("Sign out")

			click_link("signout_link")
		end
	end
end
