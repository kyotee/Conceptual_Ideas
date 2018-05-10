require "rails_helper"

describe UsersController do
	let(:posted) { post :create, xhr: true, params: { user: FactoryBot.attributes_for(:user) } }

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
		it "creates a new user" do
			expect {
				posted
			}.to change(User, :count).by(1)
		end
	end

	describe "GET show" do
		before(:example) do
			posted
			get :show, params: { id: 1 }
		end

		it "obtains http response as successful" do
			expect(response).to have_http_status(:ok)
		end

		it "goes to user's profile" do
			expect(response).to render_template("show")
		end
	end
end
