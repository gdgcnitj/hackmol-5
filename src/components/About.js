import React, { useState } from 'react';
import Image from 'next/image';

const About = (props) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    `/images/about1.jpg`,
    `/images/about2.jpg`,
    `/images/about3.jpg`,
    `/images/about4.jpg`,
    `/images/about5.jpg`,
    `/images/about6.jpg`,
  ];
  const handleArrowClick = (direction) => {
    if (direction === 'left') {
      setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    } else {
      setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }
  }

  return (
    <div className="AboutHackmolSection p-5 w-full h-full px-10  bg-[#1F1F1F]">
      <div className="Content w-full h-full">
        <div className='p-5'>
        <div className="HeadingTextContainer flex-col justify-center items-center gap-8 py-6">
          <div className="Heading w-9/10 text-center m-auto text-white text-3xl sm:text-6xl lg:text-8xl font-extrabold font-Minecraft leading-10 py-3">ABOUT HACKMOL</div>
          <div className="Text w-9/10 text-center my-4 mx-auto text-white text-xl lg:text-3xl font-normal font-Space-Grotesk px-10 py-3 leading-5 sm:leading-9">Lorem ipsum dolor sit amet consectetur. Egestas sed nisl condimentum quisque pharetra augue ultricies elementum. Blandit faucibus tortor vitae nunc urna id eget eget aliquam. Non pellentesque egestas turpis sed tincidunt malesuada pretium nibh</div>
        </div>

        <div className="Image w-full h-full flex-col justify-center items-center inline-flex p-10">
          <div className='w-4/5  h-[180px] sm:h-[250px] md:h-[500px] '>
            <Image
              src={images[selectedImage]}
              alt={`Image ${selectedImage + 1}`}
              width="1000"
              height="1000" className="w-full h-full  object-cover"
            /></div>
          <div className='flex w-4/5 justify-between items-center'>
            <div className="ImgDescription w-3/4  text-white  sm:text-xl font-normal font-Space-Grotesk leading-4 sm:leading-8 py-3">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi..</div>
            <div className="flex py-5">
              <div
                className="w-6 sm:w-[40px] md:w-[70px]  mx-2 sm:mx-3 md:mx-5 cursor-pointer "
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
                className="w-6 sm:w-[40px] md:w-[70px]  h-6 cursor-pointer"
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
                src={image}
                alt={`Thumbnail ${index + 1}`}
                width={1000} // Adjust the width as needed
                height={800} // Adjust the height as needed
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