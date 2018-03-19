class User < ApplicationRecord
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

  # Password Hash
  # PRE: -
  # POST: Hashes input (password) for fixtures; password field in DB is a hash
  # PARAMS: string = password in plain text
  def User.digest(string)
    cost = ActiveModel::SecurePassword.min_cost ? BCrypt::Engine::MIN_COST :
                                                  BCrypt::Engine.cost
    BCrypt::Password.create(string, cost: cost)
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
