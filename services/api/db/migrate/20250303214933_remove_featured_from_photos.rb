class RemoveFeaturedFromPhotos < ActiveRecord::Migration[8.0]
  def change
    remove_index :photos, name: 'index_photos_on_collection_id_and_featured'
    remove_column :photos, :featured
  end
end
