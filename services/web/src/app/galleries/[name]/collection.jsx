"use client"

import { useState, useEffect, useRef } from "react"
import NextImage from "next/image"
import { cn } from "@/lib/utils"

export default function GalleryImage({
  src,
  alt,
  width,
  height,
  priority = false,
  preloadOffset = 500,
  className,
}) {
  const [isVisible, setIsVisible] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isPreloaded, setIsPreloaded] = useState(false)
  const imageRef = useRef(null)

  // Set up intersection observer to detect when image is near viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When image is near viewport, mark it as visible
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: `${preloadOffset}px 0px`,
        threshold: 0.01,
      },
    )

    if (imageRef.current) {
      observer.observe(imageRef.current)
    }

    return () => {
      if (imageRef.current) {
        observer.disconnect()
      }
    }
  }, [preloadOffset])

  // Preload image when it's about to be visible
  useEffect(() => {
    if (isVisible && !isPreloaded && !priority) {
      const img = new Image()
      img.src = src
      img.onload = () => {
        setIsPreloaded(true)
      }
    }
  }, [isVisible, isPreloaded, src, priority])

  // Handle image load event
  const handleImageLoad = () => {
    setIsLoaded(true)
  }

  return (
    <div ref={imageRef} className={cn("relative overflow-hidden rounded-lg bg-stone-100", className)}>
      {(isVisible || priority) && (
        <>
          {/* Low-resolution placeholder with blur effect */}
          <div
            className={cn(
              "absolute inset-0 bg-cover bg-center blur-sm scale-105 transition-opacity duration-700",
              isLoaded ? "opacity-0" : "opacity-100",
            )}
            style={{ backgroundImage: `url(${src})`, backgroundSize: "cover" }}
          />

          {/* Main image with Pixieset-style animation */}
          <NextImage
            src={src || "/placeholder.svg"}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            className={cn(
              "object-contain w-full h-auto transition-all duration-700 ease-out",
              isLoaded ? "opacity-100 scale-100 filter-none" : "opacity-0 scale-105 blur-[2px]",
            )}
            onLoad={handleImageLoad}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        </>
      )}
    </div>
  )
}
