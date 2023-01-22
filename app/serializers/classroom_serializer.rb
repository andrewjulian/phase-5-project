class ClassroomSerializer < ActiveModel::Serializer
  attributes :id, :name, :subject

  belongs_to :teacher
  has_many :students
  
end
