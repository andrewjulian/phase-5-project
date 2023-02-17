class User < ApplicationRecord

  has_secure_password

  has_one_attached :image

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
          errors.add(:image, "must be a JPEG or PNG")
      end

  end

end
