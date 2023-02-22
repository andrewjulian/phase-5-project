class MessageSerializer < ActiveModel::Serializer
  attributes :id, :classroom_id, :body
  belongs_to :user
  belongs_to :classroom

end
