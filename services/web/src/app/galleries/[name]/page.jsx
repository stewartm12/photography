import { getPhotosByCategory } from "@/graphql/queries/category";
import Image from "next/image";

export default async function Gallery({ params }) {
  const { name } = await params;

  const s3Image = (file_key) => {
    const s3Key = `https://${process.env.NEXT_PUBLIC_AWS_BUCKET_NAME}.s3.${process.env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com/${file_key}`;

    return (
      <Image
        src={s3Key}
        alt="Picture from Tori"
        width={200}
        height={200}
        className="w-48 h-auto"
        priority
      />
    );
  };

  const results = await getPhotosByCategory(name);
  const category = results.categories[0];
  const collections = category.collections;

  return (
    <div>
      <h1>Category name: {decodeURIComponent(category.name)}</h1>

      {collections.map((collection) => {
        const collectionName = collection.name;

        return (
          <div key={collection.id}>
            <h2>{collectionName}</h2>

            <ul>
              {collection.photos.map((photo) => (
                <li key={photo.id}>
                  {s3Image(photo.fileKey)}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
