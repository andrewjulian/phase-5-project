class EnrollmentSerializer < ActiveModel::Serializer
  attributes :id, :classroom_id, :student_id
  
  belongs_to :classroom
  belongs_to :student
end
