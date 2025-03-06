class Category < ApplicationRecord
  has_many :collections, dependent: :destroy
  has_many :photos, through: :collections
  has_many :reservations
  has_many :packages, dependent: :destroy
  has_many :addons, dependent: :destroy
  belongs_to :featured_photo, class_name: 'Photo', optional: true

  validates :name, presence: true, uniqueness: { case_sensitive: false }
end
