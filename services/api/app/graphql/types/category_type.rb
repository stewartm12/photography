module Types
  class CategoryType < BaseObject
    field :id, ID, null: false
    field :name, String, null: false
    field :description, String
    field :photos, [Types::PhotoType]
    field :reservations, [Types::ReservationType]
    field :featured_photo, Types::PhotoType
    field :collections, [Types::CollectionType]
    field :packages, [Types::PackageType], null: true
    field :addons, [Types::AddonType], null: true
  end
end
