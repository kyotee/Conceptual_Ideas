# User Model Data
User.create!(
	name: "admin",
	email: "admin@hotmail.com",
	password: "admin1",
	password_confirmation: "admin1",
	admin: true
)

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
	randomInt = Random.rand(8)
	randomCourse = courseNameStub[randomInt]
	randomNumber = Random.rand(101..500)

	course_id = "#{randomCourse}#{randomNumber}"
	description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
	professor = Faker::FunnyName.two_word_name
	count = 0
	cap_off = 25 + Random.rand(100)
	prerequisites = "#{randomCourse}#{Random.rand(100..randomNumber)}"
	start_date = Faker::Date.backward(17)
	end_date = Faker::Date.forward(17)
	color_number = randomInt
	Course.create!(
		course_id: course_id,
		description: description,
		professor: professor,
		count: count,
		cap_off: cap_off,
		prerequisites: prerequisites,
		start_date: start_date,
		end_date: end_date,
		color_number: color_number
	)
end

# User Monitoring (Log) Data
(2..101).each do |value|
	20.times do |n|
		Log.create!(
			controller: "default_view_pages",
			action: "index",
			user_id: value
		)
	end
end

# Chatter Data
(1..101).each do |value|
	Chatter.create!(
		message: Faker::Food,
		user_id: value
	)
end
