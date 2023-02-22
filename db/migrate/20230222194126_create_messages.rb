class CreateMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :messages do |t|
      t.integer :user_id
      t.integer :classroom_id
      t.string :body
      t.timestamps
    end
  end
end
