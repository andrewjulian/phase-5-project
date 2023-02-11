class User < ApplicationRecord

  has_secure_password

  has_one_attached :avatar

  validates :email, presence: true
  validates :email, uniqueness: true
  validates :display_name, presence: true
  validates :type, presence: true
  validates :password, presence: true

end
