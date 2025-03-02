import { gql } from "@apollo/client";
import { getClient } from "@/lib/apolloClient";

export async function getLocationSuggestions(query) {
  const client = getClient();

  const { data } = await client.query({
    query: gql`
      query AutocompleteLocation($query: String!) {
        autocompleteLocation(query: $query) {
          address
          latitude
          longitude
        }
      }
    `,
    variables: { query }
  });

  return data;
}
