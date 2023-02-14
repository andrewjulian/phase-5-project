class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  skip_before_action :authorize, only: [:create]

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :accepted
  end

  def show
    user = User.find_by(id: session[:user_id])
    render json: user
  end

  def index
    users = User.all
    render json: users
  end

  def update
    user = User.find_by(id: session[:user_id])
    user.update!(update_user_params)
    render json: user
  end


  private

  def render_unprocessable_entity(invalid)
    render json:{error: invalid.record.errors}, status: :unprocessable_entity
  end

  def user_params
    params.permit(:id, :email, :password, :display_name, :type)
  end

  def update_user_params
    params.permit(:id, :email, :password, :display_name, :type, :image)
  end

end
