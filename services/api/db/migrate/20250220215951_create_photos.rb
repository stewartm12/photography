class CreatePhotos < ActiveRecord::Migration[8.0]
  def change
    create_table :photos do |t|
      t.string :s3_key
      t.references :category, null: false, foreign_key: true
      t.timestamps
    end

    add_index :photos, :s3_key, unique: true
  end
end
