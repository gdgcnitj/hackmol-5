import t1 from "../../public/images/Reviews/tweetbird2.svg";
import t2 from "../../public/images/Reviews/tweetbird3.svg";

function Testimonies() {
  return (
    <div className="flex flex-col text-center bg-[#1F1F1F] pb-4 px-4  w-full space-y-4  md:space-y-0 pb-[10px] ">
      <div className="text-center text-white text-5xl my-12 ">
        PREVIOUS YEAR REVIEWS
      </div>
      <div className="flex text-baseline">
        <img
          src={t1.src}
          className="z-[2] md:h-[40vw]   md:ml-0 md:mb-0 h-[200px]  "
          alt="#"
        />

        <div className="bg-white text-center border-2 border-pink-400 md:ml-[-20vw]  md:pl-[100px] md:py-[40px]   md:w-[910px] md:h-[250px]  md:mr-[5vw]  py-2 px-2 ml-[-10vw]">
          <div>
            <div className="flex font-bold text-xl ">
              <div className="bg-[#1F1F1F] w-[30px] h-[30px] mr-4"></div>
              <h1>Aditya</h1>
            </div>
            <div className="text-left  md:text-base text-xs ">
              Being a first-timer at the GDSC hackathon in NITJ was a thrilling
              experience. The collaborative environment, coupled with helpful
              mentors, made the event a fantastic introduction to coding
              challenges. The well-organized setup and friendly atmosphere
              enhanced my learning and confidence. It was more than just a
              competition; it was a glimpse into a vibrant tech community.
              Looking forward to more GDSC events!
            </div>
          </div>
        </div>
      </div>
      <div className="flex ">
        <div className="bg-white  text-center  border-2 border-pink-400 md:h-[250px] md:mr-[-20vw] md:pr-[100px] md:py-[40px] md:mt-[-2vw] md:w-[900px] md:ml-[5vw] mr-[-10vw] w-[90vw] py-2 px-2  ">
          <div>
            <div className="flex text-xl font-bold justify-end ">
              <h1>Nikhil</h1>
              <div className="bg-[#1F1F1F] w-[30px] h-[30px] ml-4"></div>
            </div>
            <div className="text-right md:text-base text-xs  ">
              Participating in the GDSC hackathon at NITJ was an incredible
              experience. The event, filled with innovative energy. The emphasis
              on teamwork and collaboration, coupled with guidance from mentors,
              created a dynamic learning environment. The well-organized event,
              from registration to problem statements. Overall, the hackathon
              not only sharpened our technical skills but also strengthened the
              sense of community within the college.
            </div>
          </div>
        </div>

        <img src={t2.src} className="md:h-[40vw]  h-[200px] " alt="#" />
      </div>
    </div>
  );
}

export default Testimonies;
