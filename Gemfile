source 'https://rubygems.org'

# Ruby on Rails version
gem 'rails', '~> 5.1.4'
# Puma as the app server
gem 'puma', '~> 3.7'
# SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.2'
# Turbolinks for navigating your web application faster
gem 'turbolinks', '~> 5'
# JSON for building APIs with ease
gem 'jbuilder', '~> 2.5'
# I18n for localization ('L'+10+'n' and 'I'+18+'n'
gem 'rails-i18n'
# Use and manage React components 
gem 'react-rails'
gem 'webpacker-react'
# ActiveModel for has_secure_password; stores and verifies passwords securely
gem 'bcrypt',         '3.1.11'
# Write xlsx for creating excel files
gem 'write_xlsx'
# jQuery for ajax calls of json client data
gem 'jquery-rails'


# Gems belonging to both development and test environment
group :development, :test do
  # Database for Active Record
  gem 'sqlite3'
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  # Call 'pry-rails' anywhere in Capybara acceptance test code to stop execution for manual debugging
  gem 'pry-rails'
  # Replaces default testing (test directory)
  gem 'rspec-rails', '~> 3.6'
  gem 'rails-controller-testing'
  # Replaces default fixtures in testing
  gem 'factory_bot_rails'
  # Capybara for acceptance testing
  gem 'capybara', '~> 2.13'
  # Head driver for acceptance testing
  gem 'selenium-webdriver'
  gem 'chromedriver-helper'
  # Headless driver for acceptance testing
  gem 'poltergeist'
end


# Gems belonging to only development environment
group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  # Spring for speeding up development by keeping your application running in the background
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end


# Gems belonging to only production environment
group :production do
  # Host server Heroku uses Postgres
  gem 'pg'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
