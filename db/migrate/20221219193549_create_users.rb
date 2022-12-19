class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :email
      t.string :display_name
      t.string :password_digest
      t.string :role

      t.timestamps
    end
  end
end
