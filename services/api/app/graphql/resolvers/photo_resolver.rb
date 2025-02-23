module Resolvers
  class PhotoResolver < GraphQL::Schema::Resolver
    type [Types::PhotoType], null: false

    def resolve
        Photo.where(highlighted: true).order(:highlighted_order)
    end
  end
end
