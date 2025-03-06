module Resolvers
  class CategoryResolver < GraphQL::Schema::Resolver
    type [Types::CategoryType], null: false

    argument :name, String, required: false

    def resolve(name: nil)
      if name
        Category.where('name LIKE ?', "%#{name}%")
      else
        Category.all.order(:id)
      end
    end
  end
end
