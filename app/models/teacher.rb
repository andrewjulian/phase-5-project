class Teacher < User
  has_and_belongs_to_many :students, join_table: :classrooms
  has_many :classrooms
end
