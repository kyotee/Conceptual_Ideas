class SessionsController < ApplicationController
  def new
  end

  def create
    if request.xhr?
      user = User.find_by(email: user_signin_params[:email].downcase)
      
      if user && user.authenticate(user_signin_params[:password])
        flash[:alert] = "Blue"
        flash[:notice] = "Welcome back #{user[:name]}."

      	log_in user
        remember user
        redirect_to user
      else
        flash[:alert] = "Red"
        flash[:notice] = "Invalid credentials submitted."

      	redirect_to action: 'new'
      end
    end
  end

  def destroy
    log_out if logged_in?
    redirect_to root_url
  end

  private

  def user_signin_params
    params.require(:userLogin).permit(:email, :password)
  end
end
