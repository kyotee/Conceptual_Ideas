class CoursesController < ApplicationController
  def index
    if params[:course]
      @test = "test"
      @courses = Course.search(params[:course][:search])
    else
      @test = "LOOOL"
      @courses = Course.all
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
