'use client';

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Check, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function ServiceTabs({ categories }) {
  return (
    <section className="py-12 md:py-16 px-4 max-w-7xl mx-auto">
    <Tabs defaultValue='1' className="w-full">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-stone-800 mb-6">Photography Packages</h2>
        <TabsList className="flex flex-wrap h-auto bg-stone-100 p-1 mb-2">
          {categories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="flex-grow data-[state=active]:bg-white data-[state=active]:text-stone-800 py-3 hover:cursor-pointer hover:bg-stone-200"
            >
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {categories.map((category) => (
        <TabsContent key={category.id} value={category.id} className="mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="sticky top-4">
                <div className="aspect-square relative rounded-lg overflow-hidden mb-4">
                  <Image
                    src={`https://${process.env.NEXT_PUBLIC_AWS_BUCKET_NAME}.s3.${process.env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com/${category.featuredPhoto.fileKey}`}
                    alt={category.name}
                    width={500}
                    height={500}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-stone-800 mb-2">{category.name}</h3>
                <p className="text-stone-600 mb-4">{category.description}</p>

                {category.addons && (
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold text-stone-800 mb-3">Available Add-Ons</h4>
                    <ul className="space-y-2">
                      {category.addons.map((addon, index) => (
                        <li key={index} className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-stone-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-stone-600">{`${addon.name} - ${addon.price}`}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.packages.map((pkg, index) => (
                  <Card
                    key={index}
                    className={`overflow-hidden ${pkg.popular ? "border-stone-800 border-2" : "border-stone-200"}`}
                  >
                    {pkg.popular && (
                      <div className="bg-stone-800 text-white text-center py-1 text-sm font-medium">
                        Most Popular
                      </div>
                    )}
                    <CardHeader className={`${pkg.popular ? "bg-stone-50" : ""}`}>
                      <CardTitle className="flex justify-between items-center">
                        <span>{pkg.name}</span>
                        <span className="text-2xl font-bold">{pkg.price}</span>
                      </CardTitle>
                      {pkg.duration && (
                        <Badge variant="outline" className="mt-2 font-normal">
                          {pkg.duration}
                        </Badge>
                      )}
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ul className="space-y-3">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check className="h-5 w-5 text-stone-800 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-stone-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="flex flex-col">
                      <Button
                        className={`w-full ${pkg.popular ? "bg-stone-800 hover:bg-stone-700" : "bg-stone-600 hover:bg-stone-700"}`}
                      >
                        Book This Package
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  </section>
  )
}