class AddUsernameToChatters < ActiveRecord::Migration[5.1]
  def change
    add_column :chatters, :username, :string
  end
end
