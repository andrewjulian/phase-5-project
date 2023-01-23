class ClassroomSerializer < ActiveModel::Serializer
  attributes :id, :name, :subject

  belongs_to :teacher
  has_and_belongs_to_many :students, join_table: :enrollments
  
end
