class AddFeaturedPhotoToCategories < ActiveRecord::Migration[8.0]
  def change
    add_column :photos, :featured, :boolean, default: false, null: false

    add_index :photos, %i[category_id featured], unique: true, where: "featured = true"
  end
end
