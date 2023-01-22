class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :display_name, :password, :type
end
