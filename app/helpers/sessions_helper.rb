module SessionsHelper
	# Sessions Creation
	# PRE: User must exist in database
	# POST: Sets up sessions parameter corresponding to user ID (securely hashed)
	# PARAMS: user = user found in database
	def log_in(user)
	  	session[:user_id] = user.id
	end

	# Dynamically Access Sessions Parameter (on subsequent pages)
	# PRE: User must exist in database
	# POST: Returns instance variable of user found in database (based on sessions parameter)
	# PARAMS: -
  	def current_user
    	@current_user ||= User.find_by(id: session[:user_id])
  	end

	# Dynamically Access Sessions Parameter (on subsequent pages)
	# PRE: User must exist in database
	# POST: Returns boolean value for whether user exists in database and has logged in (used in views)
	# PARAMS: -
  	def logged_in?          
    	!current_user.nil?    
	end

	# Dynamically Access Sessions Parameter (on subsequent pages)
	# PRE: User must exist in database
	# POST: Deletes sessions parameter associated to user
	# PARAMS: -
	def log_out
		session.delete(:user_id)
		@current_user = nil
	end

	# Remembers a user in a persistent session.
	def remember(user)
		user.remember
		cookies.permanent.signed[:user_id] = user.id
		cookies.permanent[:remember_token] = user.remember_token
	end
end
