FactoryBot.define do
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

  factory :course do
    course_id "Comp-201"
    course_id_num "2"
    description "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    professor "Mr.CompSci-Guy"
    count "5"
    cap_off "25"
    prerequisites "Comp-101"
    start_date "2010-02-12"
    end_date "2010-06-12"
    course_type "Comp"
  end

  factory :enrollment do
    user nil
    course nil
  end
end
