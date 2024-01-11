import t1 from "../../public/images/Reviews/tweetbird2.svg";
import t2 from "../../public/images/Reviews/tweetbird3.svg";

function Testimonies() {
  return (
    <div className="flex flex-col text-center bg-[#1F1F1F] p-0 space-y-4  px-2vw h-fit">
      <div className="text-center text-white text-5xl my-12 ">
        PREVIOUS YEAR REVIEWS
      </div>
      <div className=" flex relative ">
        <div className=" relative md:top-[1vw]  top-[15vw]  z-[4]">
          <img src={t1.src} alt="#" className="z-[4]" />
        </div>

        <div className="bg-white text-center  border-4 border-pink-400 lg:w-[80vw] md:h-[26vw] lg:h-[20vw] w-[100vw]  h-[45vw] relative lg:right-[20vw] left-[-20vw] right-0  lg:pl-[11vw] pl-[5vw] pr-[1vw] py-[3vw]">
          <div>
            <div className="flex  sm:font-bold sm:text-xl  text-lg ">
              <div className="bg-[#1F1F1F] w-[30px] h-[30px] mr-4"></div>
              <h1>Aditya</h1>
            </div>
            <div className="text-left sm:text-base  text-[2.2vw]">
              <div className="bg-[#1F1F1F] w-[3.5vw] h-[3.5vw] absolute top-[-1.2vw] right-[-1.3vw]"></div>
              <div className="bg-[#1F1F1F] w-[3.5vw] h-[3.5vw] absolute top-[-1.2vw] right-[2vw]"></div>
              <div className="bg-[#1F1F1F] w-[3.5vw] h-[3.5vw] absolute top-[2.1vw] right-[-1.3vw]"></div>
              Being a first-timer at the GDSC hackathon in NITJ was a thrilling
              experience.The collaborative environment,coupled with helpful
              mentors,made the event a fantastic introduction to coding
              challenges.It was more than just a competition;it was a glimpse
              into a vibrant tech community.Looking forward to more GDSC events!
            </div>
          </div>
        </div>
      </div>
      <div className="flex relative">
        <div className="bg-white  text-center  border-4 border-pink-400  lg:w-[80vw] w-[100vw]  lg:h-[20vw] md:h-[26vw]  h-[45vw] relative lg:left-[20vw] right-[-20vw] lg:pr-[11vw] pr-[5vw] pl-[1vw] py-[3vw] ">
          <div>
            <div className="flex text-xl sm:font-bold sm:text-xl  text-lg justify-end ">
              <h1>Nikhil</h1>
              <div className="bg-[#1F1F1F] w-[30px] h-[30px] ml-4"></div>
            </div>
            <div className="text-right  sm:text-base text-[2.2vw]">
              <div className="bg-[#1F1F1F] w-[3.5vw] h-[3.5vw] absolute bottom-[-1.2vw] left-[-1.2vw]"></div>
              <div className="bg-[#1F1F1F] w-[3.5vw] h-[3.5vw] absolute top-[-1.2vw] right-[-1.3vw]"></div>
              <div className="bg-[#1F1F1F] w-[3.5vw] h-[3.5vw] absolute top-[-1.2vw] right-[2vw]"></div>
              <div className="bg-[#1F1F1F] w-[3.5vw] h-[3.5vw] absolute top-[2.1vw] right-[-1.3vw]"></div>
              <div className="bg-[#1F1F1F] w-[3.5vw] h-[3.5vw] absolute bottom-[-1.2vw] left-[2.1vw]"></div>
              <div className="bg-[#1F1F1F] w-[3.5vw] h-[3.5vw] absolute bottom-[2.1vw] left-[-1.2vw]"></div>
              Participating in the GDSC hackathon at NITJ was an incredible
              experience.The event,filled with innovative energy.The
              well-organized event,from registration to problem statements.
              Overall,the hackathon not only sharpened our technical skills but
              also strengthened the sense of community within the college.
            </div>
          </div>
        </div>
        <div className="relative  md:top-[1vw] top-[14vw] right-0">
          <img src={t2.src} className="" alt="#" />
        </div>
      </div>
    </div>
  );
}

export default Testimonies;
