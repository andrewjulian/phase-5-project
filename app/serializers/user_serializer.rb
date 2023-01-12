class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :display_name, :password, :role

  has_many :classrooms
end
