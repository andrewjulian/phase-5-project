class CreateEnrollments < ActiveRecord::Migration[7.0]
  def change
    create_table :enrollments do |t|
      t.references :user
      t.integer :clasrooms
      t.timestamps
    end
  end
end
