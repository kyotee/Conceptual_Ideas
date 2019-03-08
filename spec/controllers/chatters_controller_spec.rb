require "rails_helper"

describe ChattersController do
	let(:create_message) { post :create, xhr: true, params: { chatter: FactoryBot.attributes_for(:chatter) } }

	describe "GET index" do
		before(:example) { get :index }

		it "obtains http reponse as successful" do
			expect(response).to have_http_status(:ok)
		end

		it "renders new template" do
			expect(response).to render_template("index")
		end
	end

	describe "POST create" do
		before(:example) { 
			create_message
		}

		it "obtains http response as successful" do
			expect(response).to have_http_status(204)
		end

		it "renders no template" do
			expect(response).to render_template(nil)
		end
	end
end
