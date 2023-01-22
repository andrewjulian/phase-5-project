class Student < User
  has_and_belongs_to_many :teachers, join_table: :classrooms
  has_many :classrooms
end
