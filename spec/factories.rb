FactoryBot.define do
  factory :enrollment do
    user nil
    course nil
  end
  factory :user do
    name "testuser"
    email "testauser@gmail.com"
    password "testing"
    password_confirmation "testing"
  end

  factory :log do
    controller "users"
    action "index"
    user_id 1
  end

  factory :chatter do
    message "Hello world!"
    user_id 1
  end
end
