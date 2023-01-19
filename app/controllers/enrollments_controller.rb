class EnrollmentsController < ApplicationController

  def create
    byebug
    student = User.find(params[:user_id])
    classroom = Classroom.find(params[:classroom_id])
    classroom.users << student
  end

  private

  def render_unprocessable_entity(invalid)
    render json:{error: invalid.record.errors}, status: :unprocessable_entity
  end

  def enrollment_params()
    params.permit(:user_id, :classroom_id)
  end
end
