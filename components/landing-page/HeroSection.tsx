import Image from "next/image"

const HeroSection = () => {
    return(
        <div className="w-full h-[475px] md:h-[650px] lg:h-[800px] xl:h-auto">
          <div className="top-[25%] flex flex-col justify-center items-center text-center w-full absolute">
            <h1 className="text-5xl sm:text-8xl font-bold text-gradient ">
              Introducing <span className="block">iknowspots</span>
            </h1>
            <p className="m-5 text-lg sm:text-xl">
              Seamless granular events hosting with NFT tickets.
            </p>
            <button className="cta-button w-[40%] md:w-[25%] lg:w-[15%] px-4 sm:px-6 py-1 text-[0.8rem] sm:text-[1rem] ">Demo Video</button>
          </div>
          <div id="parent-div" className="relative hidden sm:flex w-full p-6 flex justify-center items-center">
            <Image
              src="/circles.png"
              width="1500"
              height="50"
              className="opacity-20 w-full "
              alt="Circle"
            />
            <Image
              src="/circles-mirror.png"
              width="1500"
              height="100"
              className="absolute w-full top-0 rotate-12 opacity-20"
              alt="Circle"
            />
          </div>
        </div>
    )
}
export default HeroSection