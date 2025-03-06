module Types
  class PackageType < Types::BaseObject
    field :id, ID, null: false
    field :category_id, ID, null: false
    field :name, String, null: false
    field :price, Float, null: false
    field :duration, Integer, null: false
    field :features, [String], null: false
    field :popular, Boolean, null: false
    field :category, Types::CategoryType, null: false
  end
end