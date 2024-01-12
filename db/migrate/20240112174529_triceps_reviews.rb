class TricepsReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :tricepreviews do |t|
      t.string :comment 
      t.integer :tricepworkout_id
    end 
  end
end
