class ApplyNullToServiceDetailsReservations < ActiveRecord::Migration[8.0]
  def change
    change_column :reservations, :service_details, :string, null: true
  end
end
