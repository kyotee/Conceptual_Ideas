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
courseType = ["Comp", "Engl", "Fine", "Geog", "Hist", "Math", "Psyc", "Soci"]

500.times do |n|
	randomCourse = courseType[Random.rand(8)]
	randomNumber = Random.rand(101..499)
	course_id = "#{randomCourse}-#{randomNumber}"
	course_id_num = "#{randomNumber}"[0]
	description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
	professor = Faker::FunnyName.two_word_name
	count = 15
	cap_off = 15 + Random.rand(4)
	prerequisites = "#{randomCourse}-#{Random.rand(100..randomNumber-1)}"
	start_date = Faker::Date.backward(17)
	end_date = Faker::Date.forward(17)
	Course.create!(
		course_id: course_id,
		course_id_num: course_id_num,
		description: description,
		professor: professor,
		count: count,
		cap_off: cap_off,
		prerequisites: prerequisites,
		start_date: start_date,
		end_date: end_date,
		course_type: randomCourse
	)
end

# User Monitoring (Log) Data
(2..101).each do |value|
	20.times do |n|
		Log.create!(
			controller: "default_view_pages",
			action: "index",
			ip_address: "127.0.0.1",
			user_id: value
		)
	end
end

# Chatter Data
(2..101).each do |value|
	usernames = User.find(value).name
	beer = Faker::Beer.name

	Chatter.create!(
		message: beer,
		username: usernames,
		user_id: value
	)
end

# User and Course Association
(1..5).each do |value|
	Enrollment.create!(
		user: User.find(value),
		course: Course.find(value)
	)
end
