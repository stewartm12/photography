import { getPhotosByCategory } from "@/graphql/queries/category";
import Image from "next/image";

export function getCategoryData(name) {
	return getPhotosByCategory(name);
}
export default async function CategoryPage({ params }) {
	const { name } = await params;

	const s3Image = (file_key) => {
		const s3Key = `https://${process.env.NEXT_PUBLIC_AWS_BUCKET_NAME}.s3.${process.env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com/${file_key}`;

		return <Image
		src={s3Key}
		alt="Picture from Tori"
		width={200}
		height={200}
		className="w-48 h-auto"
		priority
	/>
	}

	const image_data = await getCategoryData(name);

	return (
		<div>
			<h1>Category name: {decodeURIComponent(name)}</h1>
			<ul>
				{image_data.categories[0].photos.map((photo) => (
					<li key={photo.id}>
						{s3Image(photo.fileKey)}
					</li>
				))}
			</ul>
		</div>
	);
};
