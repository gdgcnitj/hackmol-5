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
    <div className="AboutHackmolSection w-full h-full  bg-stone-900">
      <div className="Content w-full h-full    ">
        <div className="HeadingTextContainer   flex-col justify-center items-center gap-8 ">
          <div className="Heading w-9/10 text-center font-bold m-auto text-white text-3xl sm:text-6xl lg:text-8xl  font-['Minecrafter'] leading-10 ">ABOUT HACKMOL</div>
          <div className="Text w-9/10 text-center my-4 mx-auto text-white text-xl  lg:text-3xl font-normal font-['Space Grotesk'] leading-5 sm:leading-9">Lorem ipsum dolor sit amet consectetur. Egestas sed nisl condimentum quisque pharetra augue ultricies elementum. Blandit faucibus tortor vitae nunc urna id eget eget aliquam. Non pellentesque egestas turpis sed tincidunt malesuada pretium nibh</div>
        </div>
       
          <div className="Image w-full h-full flex-col justify-center items-center gap-2 inline-flex">
            <div className='w-4/5  h-[180px] sm:h-[250px] md:h-[500px] '>
              <Image
                src={images[selectedImage]}
                alt={`Image ${selectedImage + 1}`}
                width="1000"
                height="1000" className="w-full h-full  object-cover"
              /></div>
            <div className='flex w-4/5 justify-between items-center'>
              <div className="ImgDescription w-3/4  text-white  sm:text-xl font-normal font-['Space Grotesk'] leading-4 sm:leading-8 ">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi..</div>
              <div className="flex ">
                <div
                  className="w-6 sm:w-[40px] md:w-[70px]  mx-2 sm:mx-3 md:mx-5 cursor-pointer "
                  onClick={() => handleArrowClick('left')}
                >

                  <Image
                    src={`/images/Arrow.png`}
                    alt="Left Arrow"
                    width={1000} // Adjust the width as needed
                    height={1000} // Adjust the height as needed
                  />
                </div>
                <div
                  className="w-6 sm:w-[40px] md:w-[70px]  h-6 cursor-pointer"
                  onClick={() => handleArrowClick('right')}
                >
                  <Image
                    src={`/images/Arrow (1).png`}
                    alt="Right Arrow"
                    width={1000} // Adjust the width as needed
                    height={1000} // Adjust the height as needed
                  />
                </div>
              </div>

           
          </div>

        </div>
        <div className="flex overflow-x-auto my-6">
  {images.map((image, index) => (
    <div
      key={index}
      className={`w-full h-full mr-2 cursor-pointer opacity-70 hover:opacity-100 ${index === selectedImage ? 'border-2  border-lime-500' : ''
        }`}
      onClick={() => setSelectedImage(index)}
    >
      <Image
        src={image}
        alt={`Thumbnail ${index + 1}`}
        width={1500} // Adjust the width as needed
        height={1000} // Adjust the height as needed
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