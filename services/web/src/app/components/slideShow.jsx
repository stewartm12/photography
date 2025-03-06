"use client"

import { useState, useEffect, useRef } from "react"
import NextImage from 'next/image'
import { cn } from "@/lib/utils"

export default function SlideShow({ photos }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const slideShowRef = useRef(null)

  // Set up intersection observer to detect when slideshow is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 } // Trigger when at least 10% of the element is visible
    )

    if (slideShowRef.current) {
      observer.observe(slideShowRef.current)
    }

    return () => {
      if (slideShowRef.current) {
        observer.unobserve(slideShowRef.current)
      }
    }
  }, [])

  // Auto-advance slides only when visible
  useEffect(() => {
    if (!isVisible || photos.length === 0) return

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [isVisible, photos.length])

  // Preload all images using Next.js Image component for better integration
  useEffect(() => {
    if (typeof window === "undefined" || photos.length === 0) return

    photos.forEach((photo) => {
      try {
        const img = new Image()
        img.src = `https://${process.env.NEXT_PUBLIC_AWS_BUCKET_NAME}.s3.${process.env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com/${photo.fileKey}`
      } catch (error) {
        console.error("Error preloading image:", error)
      }
    })
  }, [photos])

  if (photos.length === 0) {
    return null
  }

  return (
    <div className="p-12" ref={slideShowRef}>
      <div className="relative w-full h-[900px]">
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            className={cn(
              "absolute w-full h-full transition-opacity duration-1000",
              index === currentIndex ? "opacity-100" : "opacity-0"
            )}
            style={{ willChange: "opacity" }}
          >
            <NextImage
              src={`https://${process.env.NEXT_PUBLIC_AWS_BUCKET_NAME}.s3.${process.env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com/${photo.fileKey}`}
              alt={`Slide ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
              layout="fill"
              priority={true}
              sizes="100vw"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
