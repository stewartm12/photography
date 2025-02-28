class RemoveLocationIdFromReservations < ActiveRecord::Migration[8.0]
  def change
    remove_index :reservations, name: "index_reservations_on_location_id"
    remove_foreign_key :reservations, :locations
    remove_column :reservations, :location_id
  end
end
