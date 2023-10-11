import Image from "next/image"

const HowItWorksSingleComponent = ({icons, title, desc}) =>{
    return(
        
            <div className="bg-[#141118] flex flex-col w-[80%] md:w-1/4 rounded-lg px-12 py-8 mx-4 items-center text-center">
              <Image
                src={`/icons/${icons}`}
                width="50"
                height="50"
                alt="icon drive add icon"
              />
              <h3 className="font-semibold my-2">{title}</h3>
              <p className="text-[0.8rem] sm:text-[1rem]">
                {desc}
              </p>
            </div>
    )
}
export default HowItWorksSingleComponent;
