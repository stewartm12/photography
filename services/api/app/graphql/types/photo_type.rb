module Types
  class PhotoType < BaseObject
    field :id, ID, null: false
    field :file_key, String, null: false
    field :category, CategoryType, null: false
  end
end
