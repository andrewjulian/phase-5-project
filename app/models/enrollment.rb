class Enrollment < ApplicationRecord
  belongs_to :classrooms
  belongs_to :user
end
