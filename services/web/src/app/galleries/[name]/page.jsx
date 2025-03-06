import { getPhotosByCategory } from "@/graphql/queries/category"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import GalleryImage from "./collection"

export default async function Gallery({ params }) {
  const { name } = await params

  const results = await getPhotosByCategory(name)
  const category = results.categories[0]
  const collections = category.collections

  return (
    <div className="min-h-screen pb-16">
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src={`https://${process.env.NEXT_PUBLIC_AWS_BUCKET_NAME}.s3.${process.env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com/${category.featuredPhoto.fileKey}`}
          alt={`${category.name} - Featured Photo`}
          fill
          priority
          className="object-cover object-top"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-lg max-w-4xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{category.name}</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">{category.description}</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold text-stone-800 mb-4">Collections</h2>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto">
            Browse through my portfolio of {category.name.toLowerCase()} work, organized by collections.
          </p>
        </div>

        <div className="space-y-24">
          {collections.map((collection) => (
            <div key={collection.name} className="scroll-mt-24">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-stone-800">{collection.name}</h3>
                <p className="text-stone-500">{collection.photos.length} photos</p>
              </div>

              <Separator className="mb-10" />

              <div className="columns-1 sm:columns-2 md:columns-3 gap-4 md:gap-6">
                {collection.photos.map((photo, index) => (
                  <div key={photo.id} className="mb-4 break-inside-avoid overflow-hidden rounded-lg">
                    <GalleryImage
                      src={`https://${process.env.NEXT_PUBLIC_AWS_BUCKET_NAME}.s3.${process.env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com/${photo.fileKey}`}
                      alt={`Photo from ${collection.name}`}
                      width={600}
                      height={800}
                      priority={index < 6} // Prioritize loading the first 6 images
                      preloadOffset={1000} // Start preloading when within 1000px of viewport
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

