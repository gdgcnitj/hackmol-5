import linkedin from "../../../public/images/linkedin.svg";
import insta from "../../../public/images/instagram.svg";
import twitter from "../../../public/images/twitter.svg";

export default function Card({ judge }) {
  return (
    <>
      <div className="flex flex-col gap-[21px] w-[334px] h-[674px] py-[24px] px-[44px] justify-center items-center bg-[#4F102F]">
        <div className="flex relative">
          <img src={judge.imageURL.src} alt="#" />
        </div>
        <div className="flex relative text-white font-Minecraft text-5xl leading-10 font-normal text-center">
          {judge.name}
        </div>
        <div className="flex relative flex-col font-Space-Grotesk text-white items-center">
          <div className="flex relative text-center text-2xl font-medium">
            {judge.role}
          </div>
          <div className="flex relative text-center text-lg font-normal">
            {judge.company}
          </div>
        </div>
        <div className="flex relative flex-row items-center justify-between self-stretch">
          <div className="flex relative">
            <a href={judge.linkedinLink} target="_blank" rel="noreferrer">
              <img src={linkedin.src} alt="#" />
            </a>
          </div>
          <div className="flex relative">
            <a href={judge.instaLink} target="_blank" rel="noreferrer">
              <img src={insta.src} alt="#" />
            </a>
          </div>
          <div className="flex relative">
            <a href={judge.twitterLink} target="_blank" rel="noreferrer">
              <img src={twitter.src} alt="#" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}