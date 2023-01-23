class Student < User
  has_and_belongs_to_many :classrooms, join_table: :enrollments
end
