class User < ApplicationRecord

  has_secure_password

  has_many :classrooms
  has_many :enrollments

  validates :email, presence: true
  validates :email, uniqueness: true
  validates :display_name, presence: true
  validates :role, presence: true
  validates :password, presence: true

end
