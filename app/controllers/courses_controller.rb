class CoursesController < ApplicationController
  def index
    @courses = Course.paginate(page: params[:page], per_page: 15)
  end

  def show
  end

  def new
  end

  def create
  end

  def edit
  end

  def update
  end

  def destroy
  end
end
