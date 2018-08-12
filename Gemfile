source 'https://rubygems.org'

# Ruby on Rails version
gem 'rails', '~> 5.1.4'
# Application server
gem 'puma', '~> 3.7'
# SCSS
gem 'sass-rails', '~> 5.0'
# Compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.2'
# Navigating your web application faster
gem 'turbolinks', '~> 5'
# Building APIs with ease (JSON)
gem 'jbuilder', '~> 2.5'
# Localization ('L'+10+'n') and Internationalization ('I'+18+'n')
gem 'rails-i18n'
# Use and manage React components 
gem 'react-rails'
gem 'webpacker-react'
# Stores and verifies passwords securely
gem 'bcrypt', '3.1.11'
# Creating excel files
gem 'write_xlsx'
# Ajax calls with json client data
gem 'jquery-rails'
# Read and write PNG images
gem 'chunky_png'
# Asynchronous execution of tasks in controllers
# gem 'delayed_job_active_record'
# gem 'daemons'

# Gems belonging to both development and test environment
group :development, :test do
  # Database of Active Record
  gem 'sqlite3'
  # Stop execution and get a debugger console (call 'byebug')
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  # Call 'pry-rails' anywhere in Capybara acceptance test code to stop execution for manual debugging
  gem 'pry-rails'
  # Replaces default testing (test directory)
  gem 'rspec-rails', '~> 3.6'
  gem 'rails-controller-testing'
  # Replaces default fixtures in testing
  gem 'factory_bot_rails'
  # Acceptance testing
  gem 'capybara', '~> 2.13'
  gem 'capybara-screenshot'
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
