module Resolvers
  class AutocompleteLocationResolver < GraphQL::Schema::Resolver
    type [Types::LocationType], null: false

    argument :query, String, required: true

    def resolve(query:)
      results = MapboxService.autocomplete(query)

      results['features'].map do |feature|
        {
          address: feature['properties']['full_address'],
          latitude: feature['properties']['coordinates']['latitude'],
          longitude: feature['properties']['coordinates']['longitude']
        }
      end
    end
  end
end
