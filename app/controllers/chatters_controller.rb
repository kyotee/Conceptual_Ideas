class ChattersController < ApplicationController
	after_create :notify_pusher, on: :create

	def index
		@messages = Chatter.all
	end

	def create
		@chatter = Chat.new(chatter_params)

		unless @chatter.save
	        flash[:alert] = "Red"
        	flash[:notice] = "Message can't be empty."
		end
	end

	private

	def chatter_params
		params.require(:chatter).permit(:message, :user_id)
	end

	def notify_pusher
		Pusher.trigger('chat', 'new', self.as_json)
	end
end
