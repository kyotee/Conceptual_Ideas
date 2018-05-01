class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def show
    @user = User.find(params[:id])
  end

  def create
    @user = User.new(user_params)

    if request.xhr?
      if @user.save
        flash[:alert] = "Green"
        flash[:notice] = "Successfully created an account."

        log_in @user
        redirect_to @user
      else
        flash[:alert] = "Red"
        flash[:notice] = "E-mail already exists."

        redirect_to action: 'new'
      end
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end
end
