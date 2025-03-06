class Collection < ApplicationRecord
  belongs_to :category
  has_many :photos, dependent: :destroy

  validates :name, :category, presence: true
end
