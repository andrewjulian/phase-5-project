class MessagesController < ApplicationController

  def create
    user = User.find_by(id: session[:user_id])
    @message = user.messages.new(messages_params)

    if @message.save
      render json: @message, status: :created, location: @message
    else
      render json: @message.errors, status: :unprocessable_entity
    end
  end

  def index
    messages = Message.all
    render json: messages
  end

  def classroommessages
    classroom = Classroom.find_by(id: params[:classroomId])
    allmessages = classroom.messages
    render json: allmessages
  end

  private

  def render_unprocessable_entity(invalid)
    render json:{error: invalid.record.errors}, status: :unprocessable_entity
  end


  def messages_params
    params.require(:message).permit(:id, :classroom_id, :user_id, :body)
  end

end
