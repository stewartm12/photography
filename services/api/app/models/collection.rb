class Collection < ApplicationRecord
  belongs_to :category
  has_many :photos, dependent: :destroy
end
