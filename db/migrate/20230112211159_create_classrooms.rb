class CreateClassrooms < ActiveRecord::Migration[7.0]
  def change
    create_table :classrooms do |t|
      t.integer :teacher_id
      t.string :name
      t.string :subject
      t.timestamps
    end
  end
end
