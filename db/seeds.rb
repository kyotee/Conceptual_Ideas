100.times do |n|
	username  = Faker::Name.first_name[1..12]
	email = "test-#{n+1}@fakemail.com"
	password = "password"
	User.create!(
		name: username,
		email: email,
		password: password,
		password_confirmation: password
	)
end
