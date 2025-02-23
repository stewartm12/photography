'use client';

import { useState, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export default function SlideShow({ photos }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length)
    }, 10000)

    return () => clearInterval(timer)
  }, [photos.length])

  return (
    <div className="">
      <div className="relative w-full h-[900px]">
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            className={cn(
              "absolute w-full h-full transition-opacity duration-1000",
              index === currentIndex ? "opacity-100" : "opacity-0",
            )}
          >
            <Image
              src={`https://${process.env.NEXT_PUBLIC_AWS_BUCKET_NAME}.s3.${process.env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com/${photo.fileKey}`}
              alt={`Slide ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
              width={800}  // Adjust width based on your design
              height={450} // Adjust height to maintain aspect ratio
              priority />
            {/* <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
              <p className="text-lg font-semibold">{photo.category.name}</p>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  )
};
