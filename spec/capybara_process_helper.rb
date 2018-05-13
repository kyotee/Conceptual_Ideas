module CapybaraProcessHelper
	def go_to_sign_up
		find("#signing-up").click
	end

	def go_to_sign_in
		click_link("signin_link")
	end

	def go_to_side_navigation
		find("#sandwich").click
	end
end
