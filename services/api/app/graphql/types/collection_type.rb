module Types
  class CollectionType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: false
    field :category, Types::CategoryType, null: false
    field :photos, [Types::PhotoType]
  end
end
