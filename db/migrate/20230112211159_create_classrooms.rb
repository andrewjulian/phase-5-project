class CreateClassrooms < ActiveRecord::Migration[7.0]
  def change
    create_table :classrooms do |t|
      t.integer :user_id
      t.string :name
      t.string :subject
      t.references :teacher
      t.references :student
      t.timestamps
    end
  end
end
