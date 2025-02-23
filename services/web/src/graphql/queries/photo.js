import { gql } from "@apollo/client";
import { getClient } from "@/lib/apolloClient";

export async function getHighlightedPhotos() {
  const client = getClient();

  const { data } = await client.query({
    query: gql`
      query getHighlightedPhotos {
        photos {
          id
          fileKey
          category {
            name
          }
        }
      }
    `
  });

  return data;
}