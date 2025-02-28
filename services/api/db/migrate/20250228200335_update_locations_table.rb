class UpdateLocationsTable < ActiveRecord::Migration[8.0]
  def change
    remove_column :locations, :name
    add_index :locations, [:latitude, :longitude], unique: false
  end
end
