module Types
  class LocationType < Types::BaseObject
    field :id, ID, null: true
    field :address, String, null: true
    field :latitude, Float, null: true
    field :longitude, Float, null: true
  end
end
