class ChangeFeaturesToArray < ActiveRecord::Migration[8.0]
  def change
    remove_column :packages, :features
    add_column :packages, :features, :string, array: true, default: []
  end
end
