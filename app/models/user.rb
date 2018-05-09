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


  # Random 22 Character String Generator
  # PRE: -
  # POST: Output string containing 22 characters
  # PARAMS: -
  def User.new_token
    SecureRandom.urlsafe_base64
  end

  # String Encryption 
  # PRE: -
  # POST: Encryption of remember_token
  # PARAMS: string = remember_token
  def User.digest(string)
    cost = ActiveModel::SecurePassword.min_cost ? BCrypt::Engine::MIN_COST :
                                                  BCrypt::Engine.cost
    BCrypt::Password.create(string, cost: cost)
  end

  # Cookies for User
  # PRE: -
  # POST: Generates remember_token and stores encrypted version to remember_digest attribute of user 
  # PARAMS: -
  def remember
    self.remember_token = User.new_token
    update_attribute(:remember_digest, User.digest(remember_token))
  end

  def forget
    update_attribute(:remember_digest, nil)
  end

  # Authenticate User Cookie
  # PRE: User has a remember_token (cookies.permanent[:remember_token])
  # POST: Verifies if remember_token matches encrpyted version attribute of user
  # PARAMS: - remember_token = random string (corresponding to user)
  def authenticated?(remember_token)
    return false if remember_digest.nil?
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
  end
end
