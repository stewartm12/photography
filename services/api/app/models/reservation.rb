class Reservation < ApplicationRecord
  belongs_to :category
  has_many :reservation_locations, dependent: :destroy
  has_many :locations, through: :reservation_locations

  validates :full_name, :email, :category, :number_of_participants, presence: true
end
