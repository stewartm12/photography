import { NextResponse } from 'next/server';
import { createReservation } from "@/graphql/mutations/create-reservation"

export async function POST(request) {
  try {
    const params = await request.json();
    
    const formattedParams = {
      fullName: params.fullName,
      email: params.email,
      numberOfParticipants: params.numberOfParticipants,
      additionalNotes: params.additionalNotes,
      serviceDetails: params.serviceDetails,
      categoryId: params.categoryId
    };

    if (params.displayDate) {
      formattedParams.preferredDateTime = new Date(params.preferredDateTime).toISOString();
    }

    if (params.displayLocation) {
      formattedParams.location = {
        address: params.locationAddress,
        latitude: Math.random(), // Will implement coordinates in another PR
        longitude: Math.random() // Will implement coordinates in another PR
      };
    }

    const response = await createReservation(formattedParams);

    if (!response.success) {
      return NextResponse.json(
        { message: 'Failed to create reservation', errors: response.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: 'Reservation created successfully', data: response.reservation },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating reservation:", error);

    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
