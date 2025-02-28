import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: process.env.RAILS_API_URL, // Make sure your API URL is set in environment variables
  cache: new InMemoryCache(),
});

export const createReservation = async (input) => {
  const CREATE_RESERVATION_MUTATION = gql`
    mutation CreateReservation($input: CreateReservationInput!) {
      createReservation(input: $input) {
        reservation {
          id
          fullName
          email
          preferredDateTime
          numberOfParticipants
          additionalNotes
          serviceDetails
          category {
            id
            name
          }
          locations {
            address
          }
        }
        errors
      }
    }
  `;

  try {
    const { data } = await client.mutate({
      mutation: CREATE_RESERVATION_MUTATION,
      variables: { input },
    });

    if (!data || !data.createReservation) {
      return { success: false, reservation: null, errors: ['Unexpected response from server'] };
    }

    const { reservation, errors } = data.createReservation;

    if (errors.length > 0) {
      return { success: false, reservation: null, errors };
    }

    return { success: true, reservation, errors: [] };
  } catch (error) {
    console.error('Error creating reservation:', error);
    return { success: false, reservation: null, errors: ['Internal server error'] };
  }
};