class CreateChatters < ActiveRecord::Migration[5.1]
  def change
    create_table :chatters do |t|
      t.text :message
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
