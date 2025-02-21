import { getCategories } from "@/graphql/queries/category";
import Link from "next/link";

export function getAllCategories() {
  return getCategories();
}

export default async function Home() {
  const data = await getAllCategories();

  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {data.categories.map((category) => (
          <li key={category.id}>
            <Link href={`/categories/${category.name}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
