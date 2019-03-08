require "rails_helper"

describe ImageDifferencesController do
	describe "GET index" do
		before(:example) { get :index }

		it "obtains http reponse as successful" do
			expect(response).to have_http_status(:ok)
		end

		it "renders index template" do
			expect(response).to render_template("index")
		end
	end

	describe "GET show" do
		before(:example) { get :show }

		it "obtains http response as successful" do
			expect(response).to have_http_status(:ok)
		end

		it "renders show template" do
			expect(response).to render_template("show")
		end
	end
end
