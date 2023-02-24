class StudentSerializer < UserSerializer
  attributes :id, :email, :display_name, :type

  has_many :enrollments
  has_many :classrooms, through: :enrollments
end
