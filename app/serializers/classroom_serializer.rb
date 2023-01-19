class ClassroomSerializer < ActiveModel::Serializer
  attributes :id, :name, :subject

  belongs_to :user
  has_many :enrollments
  
end
