class CreateClassrooms < ActiveRecord::Migration[7.0]
  def change
    create_table :classrooms do |t|
      t.references :teacher
      t.string :name
      t.string :subject
      t.timestamps
    end
  end
end
