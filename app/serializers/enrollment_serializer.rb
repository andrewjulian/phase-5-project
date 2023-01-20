class EnrollmentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :classroom_id
end
