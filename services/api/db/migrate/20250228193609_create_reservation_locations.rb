class CreateReservationLocations < ActiveRecord::Migration[8.0]
  def change
    create_table :reservation_locations do |t|
      t.references :reservation, null: false, foreign_key: true
      t.references :location, null: false, foreign_key: true

      t.timestamps
    end

    add_index :reservation_locations,
      [:reservation_id, :location_id],
      unique: true,
      name: 'index_reservation_locations_on_reservation_and_location'
  end
end
