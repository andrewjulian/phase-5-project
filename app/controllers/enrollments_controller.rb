class EnrollmentsController < ApplicationController

  def create
    student = User.find(params[:user_id])
    classroom = Classroom.find(params[:classroom_id])
    newEnrollment = classroom.enrollments.create!(enrollment_params)

    render json: newEnrollment, status: :created 
  end

  private

  def render_unprocessable_entity(invalid)
    render json:{error: invalid.record.errors}, status: :unprocessable_entity
  end

  def enrollment_params()
    params.permit(:id, :user_id, :classroom_id)
  end

end
