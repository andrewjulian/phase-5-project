class EnrollmentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :classroom_id

  belongs_to :user
  belongs_to :classroom

end
