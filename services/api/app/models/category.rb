class Category < ApplicationRecord
  has_many :photos
  has_many :reservations

  validates :name, presence: true, uniqueness: { case_sensitive: false }
end
