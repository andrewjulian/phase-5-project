class TeacherSerializer < UserSerializer
  attributes :id, :email, :display_name, :type
  has_many :students
end
