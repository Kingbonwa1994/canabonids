
import Link from "next/link"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <LeafIcon className="h-6 w-6 text-[#00b894]" />
          <span className="sr-only">Cannabinoids Co.</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4 text-[#00b894]"
            prefetch={false}
          >
            Products
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4 text-[#00b894]"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4 text-[#00b894]"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#00b894] px-3 py-1 text-sm text-gray-50">Our Products</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Discover Our Premium Cannabinoids</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Elevate your wellness with our carefully curated selection of high-quality cannabinoid products.
                </p>
              </div>
            </div>
            <div className="grid gap-8 mt-12">
              <div className="grid md:grid-cols-2 gap-8">
                <Carousel className="rounded-lg overflow-hidden">
                  <CarouselContent>
                    <CarouselItem>
                      <img
                        src="/placeholder.svg"
                        width={600}
                        height={400}
                        alt="Product 1"
                        className="object-cover w-full aspect-[3/2]"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img
                        src="/placeholder.svg"
                        width={600}
                        height={400}
                        alt="Product 1"
                        className="object-cover w-full aspect-[3/2]"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img
                        src="/placeholder.svg"
                        width={600}
                        height={400}
                        alt="Product 1"
                        className="object-cover w-full aspect-[3/2]"
                      />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#00b894]">CBD Oil Tincture</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Our premium CBD oil tincture is made from organic, full-spectrum hemp extract for maximum wellness
                    benefits.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="text-2xl font-bold">$49.99</div>
                    <Button size="sm">Add to Cart</Button>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <Carousel className="rounded-lg overflow-hidden">
                  <CarouselContent>
                    <CarouselItem>
                      <img
                        src="/placeholder.svg"
                        width={600}
                        height={400}
                        alt="Product 2"
                        className="object-cover w-full aspect-[3/2]"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img
                        src="/placeholder.svg"
                        width={600}
                        height={400}
                        alt="Product 2"
                        className="object-cover w-full aspect-[3/2]"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img
                        src="/placeholder.svg"
                        width={600}
                        height={400}
                        alt="Product 2"
                        className="object-cover w-full aspect-[3/2]"
                      />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#00b894]">Delta-8 Gummies</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Indulge in our delicious Delta-8 THC gummies for a balanced, uplifting experience.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="text-2xl font-bold">$39.99</div>
                    <Button size="sm">Add to Cart</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">&copy; 2024 Cannabinoids Co. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-[#00b894]" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-[#00b894]" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function LeafIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  )
}