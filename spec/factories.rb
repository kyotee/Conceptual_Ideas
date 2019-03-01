FactoryBot.define do
  factory :chatter do
    message "MyText"
  end
  factory :log do
    controller "MyString"
    action "MyString"
    user nil
  end
	factory :user do
		name "testuser"
		email "testauser@gmail.com"
		password "testing"
		password_confirmation "testing"
	end
end
