class UpdatePhotosToReferenceCollections < ActiveRecord::Migration[8.0]
  def change
    remove_index :photos, name: "index_photos_on_category_id_and_featured"
    remove_reference :photos, :category, index: true

    add_reference :photos, :collection
    add_index :photos, %i[collection_id featured], unique: true, where: "(featured = true)", name: "index_photos_on_collection_id_and_featured"
  end
end
