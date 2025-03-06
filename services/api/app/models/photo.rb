class Photo < ApplicationRecord
  belongs_to :collection
  has_one :category, foreign_key: 'featured_photo_id'
  has_one_attached :image

  validates :file_key, :collection, presence: true

  before_create :set_highlighted_order, if: :highlighted?

  private

  def set_highlighted_order
    max_position = Photo.where(highlighted: true).maximum(:highlighted_order)
    self.highlighted_order = max_position ? max_position + 1 : 1
  end
end
