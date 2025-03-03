class AddANewFeaturedPhotoToCategories < ActiveRecord::Migration[8.0]
  def change
    add_reference :categories, :featured_photo, foreign_key: { to_table: :photos }, index: true
  end
end
