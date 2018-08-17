FactoryBot.define do
  factory :course do
    course_id "MyString"
    comment "MyString"
  end
	factory :user do
		name "testuser"
		email "testauser@gmail.com"
		password "testing"
		password_confirmation "testing"
	end
end
