module Resolvers
  class PhotoResolver < GraphQL::Schema::Resolver
    type [Types::PhotoType], null: false

    argument :category_id, ID, required: false

    def resolve(category_id)
      Photo.where(category_id: category_id)
    end
  end
end
