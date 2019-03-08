require "rails_helper"

describe UsersController do
	let(:create_user) { post :create, xhr: true, params: { user: FactoryBot.attributes_for(:user) } }
	let(:delete_user) { delete :destroy, xhr: true, params: { id: 1 } }

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
		it "creates a new user (by changing user count)" do
			expect {
				create_user
			}.to change(User, :count).by(1)
		end

		it "obtains http response as successful" do
			create_user
			expect(response).to have_http_status(:ok)
		end

		it "renders no template" do
			create_user
			expect(response).to render_template(nil)
		end

		it "doesn't create a new user if user already exists (by not changing user count)" do
			expect {
				create_user
				create_user
			}.to change(User, :count).by(1)
		end
	end

	describe "DELETE destroy" do 
		it "deletes new user created" do
			expect {
				create_user
				delete_user
			}.to change(User, :count).by(0)
		end
	end

	# requires admin privileges; user controller will not accept admin (type boolean) credentials
	describe "GET index" do
		before(:example) do
			create_user
			get :index
		end

		it "obtains http response as successful" do
			expect(response).to have_http_status(302)
		end

		it "renders root template" do
			expect(response).to redirect_to root_path
		end
	end

	# requires admin privileges; user controller will not accept admin (type boolean) credentials
	describe "GET show" do
		before(:example) do
			create_user
			get :show, params: { id: 1 }
		end

		it "obtains http response as successful" do
			expect(response).to have_http_status(302)
		end

		it "renders root template" do
			expect(response).to redirect_to root_path
		end
	end
end
