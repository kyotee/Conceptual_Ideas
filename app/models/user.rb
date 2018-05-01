class User < ApplicationRecord
  # virtual attribute
  attr_accessor :remember_token


  before_save :modify_credentials

  VALID_NAME_REGEX = /\A[a-zA-Z]+\z/
  validates :name,  presence: true, length: { maximum: 12 },
                    format: { with: VALID_NAME_REGEX }

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, length: { maximum: 39 },
                    format: { with: VALID_EMAIL_REGEX },
                    uniqueness: { case_sensitive: false }

  has_secure_password
  validates :password, presence: true, length: { minimum: 6, maximum: 12 }


  # Returns the hash digest of the given string.
  def User.digest(string)
    cost = ActiveModel::SecurePassword.min_cost ? BCrypt::Engine::MIN_COST :
                                                  BCrypt::Engine.cost
    BCrypt::Password.create(string, cost: cost)
  end
  
  # Returns a random token.
  def User.new_token
    SecureRandom.urlsafe_base64
  end

  # Remembers a user in the database for use in persistent sessions.
  def remember
    self.remember_token = User.new_token
    update_attribute(:remember_digest, User.digest(remember_token))
  end

  # Returns true if the given token matches the digest.
  def authenticated?(remember_token)
    BCrypt::Password.new(remember_digest).is_password?(remember_token)
  end


  private

  # Credential Modification Before Saving
  # PRE: Valid credentials submitted
  # POST: Modifies credentials and then saved to database
  # PARAMS: -
  def modify_credentials
  	self.name = name.downcase
  	self.name = name.capitalize
  	self.email = email.downcase
  end
end
