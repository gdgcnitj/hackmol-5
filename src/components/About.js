import { useState } from 'react';
import Image from 'next/image';
// import image1 from '../../public/images/about1.png'
import image2 from '../../public/images/about2.jpg';
import image3 from '../../public/images/about3.jpg';
import image4 from '../../public/images/about4.jpg';
import image5 from '../../public/images/about5.jpg';
import image6 from '../../public/images/about6.png';

const About = (props) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const images = [
    // image1,
    image2,
    image3,
    image4,
    image5,
    image6
  ];

  const handleArrowClick = (direction) => {
    if (direction === 'left') {
      setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    } else {
      setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <div id='about' className="AboutHackmolSection p-5 w-full h-full px-10 bg-[#1F1F1F]">
      <div className="Content w-full h-full">
        <div className='p-5'>
          <div className="HeadingTextContainer flex-col justify-center items-center gap-8 py-6">
            <div className="Heading w-9/10 text-center m-auto text-white text-3xl sm:text-6xl lg:text-8xl font-Minecraft leading-10 py-3">ABOUT HACKMOL</div>
            <div className="Text w-9/10 text-center my-4 mx-auto text-white text-xl lg:text-3xl font-normal font-Space-Grotesk px-10 py-3 leading-5 sm:leading-9">HackMol 5.0 is fifth-edition of community-focused 30-hour hackathon organized by DSC NIT Jalandhar. Tailored to cater to both beginners and experts, this event provides an excellent opportunity to showcase your skills and be part of a competitive yet inclusive developer community. </div>
          </div>

          <div className="Image w-full h-full flex-col justify-center items-center inline-flex p-10">
            <div className='w-4/5 h-[180px] sm:h-[250px] md:h-[500px] '>
              <Image
                src={images[selectedImage].src}
                alt={`Image ${selectedImage + 1}`}
                width="1000"
                height="1000"
                loading="lazy" // Add lazy loading attribute
                className="w-full h-full object-cover"
              />
            </div>
            <div className='flex w-4/5 justify-between items-center'>
              <div className="ImgDescription w-3/4 text-white sm:text-xl font-normal font-Space-Grotesk leading-4 sm:leading-8 py-3">Collaborate, Innovate and Win</div>
              <div className="flex py-5">
                <div
                  className="w-6 sm:w-[40px] md:w-[70px] mx-2 sm:mx-3 md:mx-5 cursor-pointer"
                  onClick={() => handleArrowClick('left')}
                >
                  <Image
                    src={`/images/Arrow.png`}
                    alt="Left Arrow"
                    width={800} // Adjust the width as needed
                    height={600} // Adjust the height as needed
                  />
                </div>
                <div
                  className="w-6 sm:w-[40px] md:w-[70px] h-6 cursor-pointer"
                  onClick={() => handleArrowClick('right')}
                >
                  <Image
                    src={`/images/Arrow (1).png`}
                    alt="Right Arrow"
                    width={800} // Adjust the width as needed
                    height={50} // Adjust the height as needed
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex overflow-x-auto my-6 px-16">
          {images.map((image, index) => (
            <div
              key={index}
              className={`w-full h-full mr-2 cursor-pointer opacity-70 hover:opacity-100 ${index === selectedImage ? 'border-2  border-[#61FF00]' : ''
                }`}
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.src}
                alt={`Thumbnail ${index + 1}`}
                width={1000} // Adjust the width as needed
                height={800} // Adjust the height as needed
                loading="lazy" // Add lazy loading attribute
                className='w-full h-full flex-shrink-0'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
