class Message < ApplicationRecord
  belongs_to :classroom
  belongs_to :user

  after_create_commit { broadcast_message }

  private

  def broadcast_message
    ActionCable.server.broadcast('ChatChannel', {
      id: id,
      body: body
    })
  end

end
