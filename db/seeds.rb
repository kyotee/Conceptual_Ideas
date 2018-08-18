# User Model Data
100.times do |n|
	username  = Faker::Name.first_name[1..13]
	email = "test-#{n+1}@fakemail.com"
	password = "password"
	User.create!(
		name: username,
		email: email,
		password: password,
		password_confirmation: password
	)
end

# Course Model Data
courseNameStub = ["Comp-", "Engl-", "Fine-", "Geog-", "Hist-", "Math-", "Psyc-", "Soci-"]

500.times do |n|
	randomCourse = courseNameStub[Random.rand(8)]
	randomNumber = Random.rand(101..500)

	course_id = "#{randomCourse}#{randomNumber}"
	description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
	professor = Faker::FunnyName.two_word_name
	count = 0
	cap_off = 25 + Random.rand(100)
	prerequisites = "#{randomCourse}#{Random.rand(100..randomNumber)}"
	comment = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
	Course.create!(
		course_id: course_id,
		description: description,
		professor: professor,
		count: count,
		cap_off: cap_off,
		prerequisites: prerequisites,
		comment: comment
	)
end
