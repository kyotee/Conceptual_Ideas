require "rails_helper"

feature "Viewing Image Differences Pages" do
	scenario "detecting differences of two images provided" do
		visit("https://conceptual-ideas.herokuapp.com/")
		go_to_side_navigation
		click_link("Image Differences")
		expect(page).to have_content("Image Differences")
		click_button("Detect Differences")
		sleep(10)
		expect(page).to have_no_content("Detect Differences")
	end
end
