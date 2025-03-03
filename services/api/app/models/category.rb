class Category < ApplicationRecord
  has_many :collections, dependent: :destroy
  has_many :photos, through: :collections
  has_many :reservations
  belongs_to :featured_photo, class_name: 'Photo', optional: true

  validates :name, presence: true, uniqueness: { case_sensitive: false }
end
