class UserSerializer < ActiveModel::Serializer

  include Rails.application.routes.url_helpers

  attributes :id, :email, :display_name, :password, :type, :image

  has_many :messages

  def image
    rails_blob_path(object.image, only_path: true) if object.image.attached?
  end
  
end
