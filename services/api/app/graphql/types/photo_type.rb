module Types
  class PhotoType < BaseObject
    field :id, ID, null: false
    field :file_key, String, null: false
    field :highlighted, Boolean, null: false
    field :highlighted_order, Integer
    field :collection, Types::CollectionType, null: true
  end
end
