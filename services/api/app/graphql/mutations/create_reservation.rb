module Mutations
  class CreateReservation < BaseMutation
    argument :full_name, String, required: true
    argument :email, String, required: true
    argument :preferred_date_time, GraphQL::Types::ISO8601DateTime, required: false
    argument :number_of_participants, Integer, required: true
    argument :additional_notes, String, required: false
    argument :service_details, GraphQL::Types::JSON, required: false
    argument :category_id, ID, required: true
    argument :location, GraphQL::Types::JSON, required: false

    field :reservation, Types::ReservationType, null: false
    field :errors, [String], null: false

    def resolve(args)
      reservation = initialize_reservation(args)
    
      if reservation.save
        location = nil
        if args[:location].present?
          location = find_or_create_location(args)
        end

        if location
          ReservationLocation.create(reservation: reservation, location: location)
        end
    
        { reservation: reservation, errors: [] }
      else
        { reservation: nil, errors: reservation.errors.full_messages }
      end
    end

    private

    def initialize_reservation(args)
      Reservation.new(
        full_name: args[:full_name],
        email: args[:email],
        preferred_date_time: args[:preferred_date_time],
        number_of_participants: args[:number_of_participants],
        additional_notes: args[:additional_notes],
        service_details: args[:service_details],
        category_id: args[:category_id]
      )
    end

    def find_or_create_location(args)
      location = Location.find_or_initialize_by(
        address: args[:location]['address'],
        latitude: args[:location]['latitude'],
        longitude: args[:location]['longitude']
      )

      if location.new_record?
       return location if location.save

       nil
      else
        location
      end
    end
  end
end
