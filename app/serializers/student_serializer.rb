class StudentSerializer < UserSerializer
  attributes :id, :email, :display_name, :type
  
  has_and_belongs_to_many :classrooms, join_table: :enrollments
end
