class AddFeatureToPhotos < ActiveRecord::Migration[8.0]
  def change
    add_column :photos, :highlighted, :boolean, default: false
    add_column :photos, :highlighted_order, :integer
    add_index :photos, :highlighted
  end
end
