class Photo < ApplicationRecord
  belongs_to :category

  has_one_attached :image

  validates :file_key, :category, presence: true
end
