import { gql } from "@apollo/client";
import { getClient } from "@/lib/apolloClient";

export async function getCategories() {
  const client = getClient();

  const { data } = await client.query({
    query: gql`
      query getCategories {
        categories {
          id
          name
        }
      }
    `,
  });

  return data;
}

export async function getCategory(name) {
  const client = getClient();
  const categoryName = decodeURIComponent(name);

  const { data } = await client.query({
    query: gql`
      query getCategory($categoryName: String!) {
        categories(name: $categoryName) {
          id
          name
        }
      }
    `,
    variables: { categoryName },
  });

  return data;
}

export async function getPhotosByCategory(name) {
  const client = getClient();
  const categoryName = decodeURIComponent(name);

  const { data } = await client.query({
    query: gql`
      query getPhotosByCategory($categoryName: String!) {
        categories(name: $categoryName) {
          id
          name
          photos {
            id
            fileKey
          }
        }
      }
    `,
    variables: { categoryName },
  });

  return data;
}
