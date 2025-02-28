class Location < ApplicationRecord
  has_many :reservation_locations, dependent: :destroy
  has_many :reservations, through: :reservation_locations

  validates :address, :latitude, :longitude, presence: true
end
