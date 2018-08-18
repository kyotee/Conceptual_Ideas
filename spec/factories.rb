FactoryBot.define do
	factory :user do
		name "testuser"
		email "testauser@gmail.com"
		password "testing"
		password_confirmation "testing"
	end
end
