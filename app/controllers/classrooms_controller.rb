class ClassroomsController < ApplicationController

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  def index
    classrooms = Classroom.all
    render json: classrooms
  end

  def create
    user = User.find_by(id: session[:user_id])
    if user.type === "Teacher"
      newClassroom = user.classrooms.create!(classroom_params)
      render json: newClassroom, status: :created
    else
      render json: { errors: ["Access Denied"] }, status: :unauthorized
    end
  end

  def remove
    user = User.find_by(id: session[:user_id])
    if user.type === "Teacher"
      classroom = user.classrooms.find(params[:deletedClassId])
      if classroom
        classroom.destroy
        render json: classroom
      else 
        render json: { errors: "Classroom not found" }, status: :not_found
      end
    else
      render json: { errors: "Access Denied" }, status: :not_found
    end
  end

  private

  def render_unprocessable_entity(invalid)
    render json: { errors: ["Complete all fields"] }, status: :unauthorized
  end

  def classroom_params
    params.permit(:id, :name, :subject)
  end

end
