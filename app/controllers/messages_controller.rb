class MessagesController < ApplicationController

  def create
    user = User.find_by(id: session[:user_id])
    message = user.messages.create!(messages_params)
    render json: message, status: :created
  end

  def index
    messages = Message.all
    render json: messages
  end

  private

  def render_unprocessable_entity(invalid)
    render json:{error: invalid.record.errors}, status: :unprocessable_entity
  end

  def messages_params
    params.permit(:id, :classroom_id, :body)
  end

end
