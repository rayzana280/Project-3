class AddImageToBicepWorkout < ActiveRecord::Migration[6.1]
  def change
    add_column :bicepworkouts, :image, :string 
  end
end
