
import Link from "next/link"

export default function Hero() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <LeafIcon className="h-6 w-6 text-[#00b894]" />
          <span className="sr-only">Lewe Cannabinoids Co.</span>
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
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-[#00b894]">
                    Elevate Your Wellness
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Discover the power of premium cannabinoids for a healthier, more balanced life.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#00b894] px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#00b894]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00b894] disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Shop Now
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-[#00b894] bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-[#00b894] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00b894] disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
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
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Product 1"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-[#00b894]">CBD Oil Tincture</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Our premium CBD oil tincture is made from organic, full-spectrum hemp extract for maximum wellness
                    benefits.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-[#00b894] px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#00b894]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00b894] disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Product 2"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-[#00b894]">Delta-8 Gummies</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Indulge in our delicious Delta-8 THC gummies for a balanced, uplifting experience.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-[#00b894] px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#00b894]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00b894] disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#00b894]">
                Elevate Your Wellness with Cannabinoids
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Discover the transformative power of premium cannabinoids and experience the benefits of a more
                balanced, healthier life.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#00b894] px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#00b894]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00b894] disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Shop Now
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-[#00b894] bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-[#00b894] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00b894] disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Learn More
              </Link>
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