class CreateReservations < ActiveRecord::Migration[8.0]
  def change
    create_table :reservations do |t|
      t.string :full_name
      t.string :email
      t.datetime :preferred_date_time
      t.integer :number_of_participants
      t.text :additional_notes

      t.references :category, foreign_key: true
      t.references :location, foreign_key: true
      t.timestamps
    end
  end
end
