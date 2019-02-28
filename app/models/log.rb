class Log < ApplicationRecord
	belongs_to :user

	validates :controller,  presence: true
	validates :action,  presence: true
end
