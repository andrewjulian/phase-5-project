class CreateEnrollments < ActiveRecord::Migration[7.0]
  def change
    create_table :enrollments do |t|
      t.integer :classroom_id
      t.integer :user_id
      t.timestamps
    end
  end
end
