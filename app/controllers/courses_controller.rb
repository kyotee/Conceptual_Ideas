class CoursesController < ApplicationController
  def index
    if params[:course]
      @isCategory = true
      @courses = Course.search(params[:course][:search])
      # redirect_back(fallback_location: root_path)
    else
      @isCategory = false
      @courses = Course.paginate(page: params[:page], per_page: 15)
    end
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
