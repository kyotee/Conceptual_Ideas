class ApplicationController < ActionController::Base
	include SessionsHelper

	before_action :set_cache_buster

	def set_cache_buster
		response.headers["Cache-Control"] = "no-cache, no-store, max-age=0, must-revalidate"
		response.headers["Pragma"] = "no-cache"
		response.headers["Expires"] = "Fri, 01 Jan 1990 00:00:00 GMT"
	end

  protect_from_forgery with: :exception
end
