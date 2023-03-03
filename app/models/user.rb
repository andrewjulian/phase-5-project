class User < ApplicationRecord

  has_secure_password 
  has_one_attached :image
  has_many :messages

  validates :email, presence: true
  validates :email, uniqueness: true
  validates :display_name, presence: true
  validates :type, presence: true
  validates :password, presence: true, :on => :create

  validate :acceptable_image

  def acceptable_image
      return unless image.attached?

      acceptable_types = ["image/jpeg", "image/png"]
      unless acceptable_types.include?(image.content_type)
         render json: { errors: ["Must be jpeg or png"] }, status: :unauthorized
      end

  end

end
