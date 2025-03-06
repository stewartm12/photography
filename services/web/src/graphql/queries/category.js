import { gql } from "@apollo/client";
import { getClient } from "@/lib/apolloClient";

const galleryCategoryMap = {
  "individual-and-family-portraits": "Individual & Family Portraits",
  "engagement-and-couples-photography": "Engagement & Couples Photography",
  "corporate-and-commercial-photography": "Corporate & Commercial Photography",
  "product-photography": "Product Photography",
  "pet-and-animal-photography": "Pet & Animal Photography",
  "graduation-and-senior-portraits": "Graduation & Senior Portraits"
};


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

export async function getCategory(urlSegment) {
  const client = getClient();
  const categoryName = galleryCategoryMap[urlSegment]

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

export async function getPhotosByCategory(urlSegment) {
  const client = getClient();
  const categoryName = galleryCategoryMap[urlSegment]

  const response = await client.query({
    query: gql`
      query getPhotosByCategory($categoryName: String!) {
        categories(name: $categoryName) {
          id
          name
          collections {
            name
            photos {
              id
              fileKey
            }
          }
          featuredPhoto {
            id
            fileKey
          }
        }
      }
    `,
    variables: { categoryName },
  });

  return response.data;
}

export async function getPackageInfo() {
  const client = getClient();

  const response = await client.query({
    query: gql`
      query getPhotosByCategory {
        categories {
          id
          name
          description
          featuredPhoto {
            id
            fileKey
          }
          packages {
            id
            name
            price
            popular
            duration
            features
          }
          addons {
            id
            name
            price
          }
        }
      }
    `
  });

  return response.data;
}