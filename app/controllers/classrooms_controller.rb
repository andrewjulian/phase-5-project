class ClassroomsController < ApplicationController

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  def index
    classrooms = Classroom.all
    render json: classrooms
  end

  def create
    user = User.find_by(id: session[:user_id])
    if user.role === "teacher"
      newClassroom = user.classrooms.create!(classroom_params)
      render json: newClassroom, status: :created
    else
      console.log("no!")
    end
  end

  private

  def render_unprocessable_entity(invalid)
    render json:{error: invalid.record.errors}, status: :unprocessable_entity
  end

  def classroom_params()
    params.permit(:id, :name, :subject)
  end

end
