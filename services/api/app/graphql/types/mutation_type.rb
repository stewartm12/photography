# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
    field :create_reservation, mutation: Mutations::CreateReservation
  end
end
