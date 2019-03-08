class Chatter < ApplicationRecord
	belongs_to :user
	after_create :notify_pusher, on: :create

	validates :message,  presence: true

    def notify_pusher
    	Pusher.trigger('chat', 'new', self.as_json)
    end
end
