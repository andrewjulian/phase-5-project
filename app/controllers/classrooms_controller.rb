class ClassroomsController < ApplicationController

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  def index
    classrooms = Classroom.all
    render json: classrooms
  end

  def create
    user = User.find_by(id: session[:user_id])
    newClassroom = user.classrooms.create!(classroom_params)
    render json: newClassroom, status: :created
  end

  def remove
    user = User.find_by(id: session[:user_id])
    classroom = user.classrooms.find(params[:deletedClassId])
    if classroom
      classroom.destroy
      render json: classroom
    else 
      render json: { error: "Classroom not found" }, status: :not_found
    end
  end

  private

  def render_unprocessable_entity(invalid)
    render json:{error: invalid.record.errors}, status: :unprocessable_entity
  end

  def classroom_params
    params.permit(:id, :name, :subject, :teacher_id)
  end

end
