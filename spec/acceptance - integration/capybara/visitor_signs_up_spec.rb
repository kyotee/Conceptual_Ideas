require "rails_helper"

feature "Visitor Signs Up" do
	scenario "creates an account and log in with credentials" do
			visit("https://www.google.ca")
			sleep(40)
			# expect(response).to render_template("new")
			# post :create, xhr: true, params: { user: FactoryBot.attributes_for(:user) }
			# expect(response).to have_http_status(:ok)
			# expect(response).to have_http_status(:ok)
	end
end
