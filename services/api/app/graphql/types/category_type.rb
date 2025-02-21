module Types
  class CategoryType < BaseObject
    field :id, ID, null: false
    field :name, String, null: false
    field :description, String, null: true
    field :photos, [Types::PhotoType], null: true
  end
end
