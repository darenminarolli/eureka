
import { BackgroundGradientAnimation } from "./ui/bg-gradient-animation";
import { WobbleCard } from "./ui/wobble-card";
const About = () => {
  return (
    
    // <BackgroundGradientAnimation >
      <section id="about" className="w-full py-12 md:py-24 lg:py-32  bg-black rounded-b-lg">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg px-3 py-1 text-sm text-gray-100 ">
                About Us
              </div>
              <h2 className="text-3xl text-slate-50 font-bold tracking-tighter sm:text-5xl pb-10 ">
              About Our Company
              </h2>
              {/* <p className="max-w-[900px] text-slate-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We are a team of passionate individuals dedicated to creating
                innovative solutions that empower our clients to achieve their
                goals. Our mission is to deliver exceptional experiences and
                drive meaningful impact. At our core, we believe in the power of
                collaboration, creativity, and a relentless pursuit of
                excellence. We strive to foster a culture of trust, respect, and
                continuous learning, where everyone can thrive and contribute to
                our collective success.
              </p> */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
  <WobbleCard
    containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
    className=""
  >
    <div className="max-w-xs">
      <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        About Eureka
      </h2>
      <p className="mt-4 text-left text-base/6 text-neutral-200">
        At Eureka, we are dedicated to innovating the future of software
        development. With a passion for technology and a commitment to
        excellence, we empower businesses to achieve their goals through
        cutting-edge solutions and unparalleled expertise.
      </p>
    </div>
    <img
      src="https://images.pexels.com/photos/414860/pexels-photo-414860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      width={500}
      height={500}
      alt="Eureka team working"
      className="absolute -right-4 lg:-right-[40%] -bottom-10 object-contain rounded-2xl"
    />
  </WobbleCard>
  <WobbleCard containerClassName="col-span-1 min-h-[300px]">
    <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
      Our Vision
    </h2>
    <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
      Eureka envisions a world where technology seamlessly integrates with daily
      life, driving innovation and efficiency. We strive to be at the forefront
      of this revolution, crafting solutions that make a real difference.
    </p>
  </WobbleCard>
  <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
    <div className="max-w-sm">
      <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        Join Us on Our Journey
      </h2>
      <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
        At Eureka, we believe in the power of collaboration and the potential of
        technology to transform industries. Join us on our journey to create
        innovative software solutions that shape the future.
      </p>
    </div>
    <img
      src="https://img.freepik.com/free-photo/global-business-internet-network-connection-iot-internet-things-business-intelligence-concept-busines-global-network-futuristic-technology-background-ai-generative_1258-176762.jpg"
      width={500}
      height={500}
      alt="Eureka global network"
      className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
    />
  </WobbleCard>
</div>

            </div>
          </div>
        </div>
      </section>
    //  </BackgroundGradientAnimation>
  );
};

export default About;
