class AddImageToTricepWorkout < ActiveRecord::Migration[6.1]
  def change
    add_column :tricepworkouts, :image, :string 
  end
end
