class ChangeS3keyToFilekeyPhotos < ActiveRecord::Migration[8.0]
  def change
    remove_index :photos, :s3_key
    rename_column :photos, :s3_key, :file_key
    add_index :photos, :file_key, unique: true
  end
end
