class UsersController < ApplicationController
  before_action :admin_user, only: [:index, :show]

  def new
    @user = User.new
  end

  def index
    @user = User.where.not(email: "admin@hotmail.com")
  end

  def show
    @user = User.find(params[:id])
    @log = User.find(params[:id]).logs
  end

  def create
    if request.xhr?
      @user = User.new(user_params)

      if @user.save
        flash[:alert] = "Green"
        flash[:notice] = "Successfully created an account."

        log_in @user
        redirect_to root_url
      else
        flash[:alert] = "Red"
        flash[:notice] = "E-mail already exists."

        redirect_to action: 'new'
      end
    end
  end

  def destroy
    User.find(params[:id]).destroy
    flash[:alert] = "Green"
    flash[:notice] = "Successfully deleted account."
    redirect_to action: 'index'
  end

  private

  def admin_user
    redirect_to(root_url) unless current_user.present? && current_user.admin?
  end

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end
end
