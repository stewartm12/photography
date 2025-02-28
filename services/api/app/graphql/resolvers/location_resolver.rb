module Resolvers
  class LocationResolver < GraphQL::Schema::Resolver
    type [Types::LocationType], null: false

    argument :id, ID, required: true
    argument :address, String, required: false
    argument :latitude, String, required: false
    argument :longitude, String, required: false

    def resolve(id:)
      Location.find_by(id: id)
    end
  end
end
