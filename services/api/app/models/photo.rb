class Photo < ApplicationRecord
  belongs_to :category

  has_one_attached :image

  validates :file_key, :category, presence: true

  before_create :set_highlighted_position, if: :highlighted?

  private

  def set_highlighted_position
    max_position = Photo.where(highlighted: true).maximum(:highlighted_position)
    self.highlighted_position = max_position ? max_position + 1 : 1
  end
end
