import { getCategories } from "@/graphql/queries/category";
import Link from "next/link";

export default async function Galleries() {
  const data = await getCategories();

  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {data.categories.map((category) => (
          <li key={category.id}>
            <Link href={`/galleries/${encodeURIComponent(category.name)}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
