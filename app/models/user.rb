class User < ApplicationRecord
  before_save :modify_credentials

  VALID_NAME_REGEX = /\A[a-zA-Z]+\z/
  validates :name,  presence: true, length: { maximum: 12 },
                    format: { with: VALID_NAME_REGEX }

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, length: { maximum: 40 },
                    format: { with: VALID_EMAIL_REGEX },
                    uniqueness: { case_sensitive: false }

  has_secure_password
  validates :password, presence: true, length: { minimum: 6, maximum: 12 }

  private

  # modify credentials before saving to database
  def modify_credentials
  	self.name = name.downcase
  	self.name = name.capitalize
  	self.email = email.downcase
  end
end
