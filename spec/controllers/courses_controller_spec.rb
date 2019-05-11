require "rails_helper"

describe CoursesController do
	describe "GET show" do
		before(:example) { get :show, params: { filter: "All", sort: "Descending", level: "AllLevels" } }

		it "obtains http reponse as successful" do
			expect(response).to have_http_status(:ok)
		end

		it "renders new template" do
			expect(response).to render_template("show")
		end
	end

	# TODO: POST create and DELETE destroy requires being logged in
end
