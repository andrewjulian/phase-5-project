class Classroom < ApplicationRecord

  belongs_to :teacher
  has_many :enrollments, dependent: :destroy
  has_many :students, through: :enrollments
  has_many :messages

  validates :name, presence: true
  validates :name, uniqueness: true
  validates :subject, presence: true

end
