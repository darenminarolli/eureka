import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Navbar from "./Navbar";
import About from "./About";
import Work from "./Work";
import Home from "./Home";

export function Component() {
  return (
    <div className="flex flex-col min-h-sreen">
      <Navbar />
      <main className="flex-1">
        <Home />
        <About />

        <Work />
        {/* <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div
                  className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Our Team</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet the Eureka Innovators</h2>
                <p
                  className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our talented team of engineers, designers, and visionaries are dedicated to pushing the boundaries of
                  what's possible in technology.
                </p>
              </div>
            </div>
            <div
              className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center justify-center space-y-4">
                <img
                  alt="Team Member"
                  className="rounded-full"
                  height="120"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "120/120",
                    objectFit: "cover",
                  }}
                  width="120" />
                <div className="text-center">
                  <h3 className="text-xl font-bold">John Doe</h3>
                  <p className="text-gray-500 dark:text-gray-400">Co-Founder & CEO</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <img
                  alt="Team Member"
                  className="rounded-full"
                  height="120"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "120/120",
                    objectFit: "cover",
                  }}
                  width="120" />
                <div className="text-center">
                  <h3 className="text-xl font-bold">Jane Smith</h3>
                  <p className="text-gray-500 dark:text-gray-400">Chief Technology Officer</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <img
                  alt="Team Member"
                  className="rounded-full"
                  height="120"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "120/120",
                    objectFit: "cover",
                  }}
                  width="120" />
                <div className="text-center">
                  <h3 className="text-xl font-bold">Michael Johnson</h3>
                  <p className="text-gray-500 dark:text-gray-400">Head of Product Design</p>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Get in Touch
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Let&apos;s Discuss Your Needs
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our team is here to help you find the right solutions for your
                  business. Fill out the form below and we&apos;ll be in touch.
                </p>
              </div>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex flex-col space-y-4">
                <Input className="max-w-lg" placeholder="Name" type="text" />
                <Input className="max-w-lg" placeholder="Email" type="email" />
                <Textarea className="max-w-lg" placeholder="Message" />
                <Button className="w-full" type="submit">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-100 p-6 md:py-12 w-full dark:bg-gray-800">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Company</h3>
            <Link href="#">About Us</Link>
            <Link href="#">Our Team</Link>
            <Link href="#">Careers</Link>
            <Link href="#">News</Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Products</h3>
            <Link href="#">Eureka Analytics</Link>
            <Link href="#">Eureka Automation</Link>
            <Link href="#">Eureka Cloud</Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <Link href="#">Blog</Link>
            <Link href="#">Documentation</Link>
            <Link href="#">Support</Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Cookie Policy</Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Contact</h3>
            <Link href="#">Sales</Link>
            <Link href="#">Support</Link>
            <Link href="#">Partnerships</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
