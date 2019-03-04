class AddIpAddressToLogs < ActiveRecord::Migration[5.1]
  def change
    add_column :logs, :ip_address, :string
  end
end
