module Types
  class ReservationType < Types::BaseObject
    field :id, ID, null: false
    field :full_name, String, null: false
    field :email, String, null: false
    field :preferred_date_time, GraphQL::Types::ISO8601DateTime
    field :number_of_participants, Integer, null: false
    field :additional_notes, String
    field :service_details, GraphQL::Types::JSON
    field :category, CategoryType, null: false
    field :locations, [LocationType]
  end
end
