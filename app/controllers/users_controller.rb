class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def show
    @user = User.find(params[:id])
  end

  def create
    @user = User.new(user_params)

    respond_to do |format|
      if @user.save
        $color = "Green"
        $message = "Successfully created an account."

        log_in @user
        format.html {redirect_to @user}
        format.js
      else
        $color = "Red"
        $message = "Submission unsuccessful. Ensure input fields are valid."

        format.html {render action: 'new'}
        format.js
      end
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end
end
