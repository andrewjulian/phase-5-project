class ClassroomSerializer < ActiveModel::Serializer
  attributes :id, :name, :subject, :teacher_id

  belongs_to :teacher
  has_many :enrollments
  has_many :students, through: :enrollments
  has_many :messages
  
end
