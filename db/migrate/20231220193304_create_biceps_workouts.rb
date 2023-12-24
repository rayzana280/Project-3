class CreateBicepsWorkouts < ActiveRecord::Migration[6.1]
  def change
    create_table :bicepworkouts do |t|
      t.string :name 
      t.integer :sets
      t.integer :reps 
    end 
  end
end
