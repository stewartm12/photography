class CreateLocations < ActiveRecord::Migration[8.0]
  def change
    create_table :locations do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.float :latitude
      t.float :longitude
      t.timestamps
    end
  end
end
