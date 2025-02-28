class AddServiceDetailsToReservations < ActiveRecord::Migration[8.0]
  def change
    add_column :reservations, :service_details, :jsonb, null: false
  end
end
