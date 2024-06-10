import React from "react";

import { AuroraBackground } from "./ui/aurora-bg";

const Work = () => {
  return (
    <section
      id="work"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-200 dark:bg-gray-800"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm dark:bg-gray-800">
              Our Products
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Empowering Businesses with Innovative Solutions
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Eureka offers a suite of cutting-edge products designed to
              streamline operations, boost productivity, and drive innovation
              for businesses of all sizes.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <img
            alt="Product"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            height="310"
            src="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width="550"
          />
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Eureka Analytics</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Gain deep insights into your business with our powerful
                    analytics platform.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Eureka Automation</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Streamline your workflows and boost productivity with our
                    intelligent automation tools.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Eureka Cloud</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Securely store and manage your data in our scalable cloud
                    infrastructure.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Work;
