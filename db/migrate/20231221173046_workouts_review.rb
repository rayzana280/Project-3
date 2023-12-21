class WorkoutsReview < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :comment 
      t.integer :workout_id
    end 
  end
end
