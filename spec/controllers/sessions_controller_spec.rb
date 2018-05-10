require "rails_helper"

describe SessionsController do
	describe "GET new" do
		before(:example) { get :new }

		it "obtains http reponse as successful" do
			expect(response).to have_http_status(:ok)
		end

		it "renders new template" do
			expect(response).to render_template("new")
		end
	end

	describe "POST create" do
		before(:example) do
			post :create, xhr: true, params: { userLogin: FactoryBot.attributes_for(:user) }
		end

		it "obtains http response as successful" do
			expect(response).to have_http_status(:ok)
		end

		it "logs in user" do
			expect(response).to render_template(nil)
		end
	end
end
