import { gql } from "@apollo/client";
import { getClient } from "@/lib/apolloClient";

export async function getTestFields() {
  const client = getClient();

  const { data } = await client.query({
    query: gql`
      query GetTestFields {
        testField
      }
    `,
  });

  return data;
}
