class UsersController < ApplicationController
  def new
	   @user = User.new
  end

  def show
	   @user = User.find(params[:id])
  end

  def create
	   @user = User.new(user_params)

  	 if @user.save
         $color = "Green"
         $message = "Successfully created."

         log_in @user
  	     redirect_to @user
     else
         render 'new'
     end
  end

  private

  # accept only these attributes for security
  def user_params
      params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end
end
