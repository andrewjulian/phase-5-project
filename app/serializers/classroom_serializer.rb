class ClassroomSerializer < ActiveModel::Serializer
  attributes :id, :name, :subject

  belongs_to :user
end