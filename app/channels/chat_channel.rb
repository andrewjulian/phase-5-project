class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_from params[:channel]
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
    stop_stream_from params[:channel]
  end

end
