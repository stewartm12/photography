class ReservationLocation < ApplicationRecord
  belongs_to :reservation
  belongs_to :location

  validates :reservation_id,
    uniqueness: { scope: :location_id, message: 'This reservation is already tied to this location.' }
end
