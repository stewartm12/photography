class CreateAddons < ActiveRecord::Migration[8.0]
  def change
    create_table :addons do |t|
      t.string :name, null: false
      t.decimal :price, precision: 10, scale: 2, null: false
      t.references :category, null: false
      t.timestamps
    end
  end
end
