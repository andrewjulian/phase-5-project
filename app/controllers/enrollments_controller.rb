class EnrollmentsController < ApplicationController

  def create
    user = User.find_by(id: session[:user_id])
    enrollment = user.enrollments.create!(enrollment_params)
    render json: enrollment, status: :created
  end

  def index
    enrollments = Enrollment.all
    render json: enrollments
  end

  private

  def render_unprocessable_entity(invalid)
    render json:{error: invalid.record.errors}, status: :unprocessable_entity
  end

  def enrollment_params
    params.permit(:id, :classroom_id)
  end

end
