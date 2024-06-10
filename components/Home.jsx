import React from 'react'
import { WavyBackground } from './ui/wavy-bg'
const Home = () => {
  return (
    <section className="h-fit md:min-h-screen w-full  bg-black flex flex-col items-center justify-center overflow-hidden ">
    {/* <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
      Eureka
    </h1>
    <div className="w-[40rem] h-40 relative">
      <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
      <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
      <SparklesCore
        background="transparent"
        minSize={0.4}
        maxSize={1}
        particleDensity={1200}
        className="w-full h-full"
        particleColor="#FFFFFF"
      />
      <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
    </div> */}
<WavyBackground className="max-w-4xl mx-auto pb-40">
    <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
      Eureka
    </p>
    <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
    Empowering innovation through technology
    </p>
  </WavyBackground>

  </section>
  )
}

export default Home
