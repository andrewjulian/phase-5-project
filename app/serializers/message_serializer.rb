class MessageSerializer < ActiveModel::Serializer
  attributes :id, :classroom_id, :user_id, :body
  
  belongs_to :classroom
  belongs_to :user
end
