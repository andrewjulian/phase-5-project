class EnrollmentSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :classroom
  belongs_to :student
end
