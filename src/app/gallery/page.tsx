"use client"
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React, { useState } from 'react'
import { galleryItems } from './GalleryItems'

function Page() {
  const [selectedMedia, setSelectedMedia] = useState('image');

  const handleMediaSelection = (mediaType) => {
    setSelectedMedia(mediaType);
  };

  const filteredMediaItems = galleryItems.filter(item => item.type === selectedMedia);

  return (
    <div className='dark:bg-[url(/darkbgtest.webp)] dark:bg-cover bg-[#EFEEE0] bg-cover h-auto my-auto mx-[1%] sm:mx-0 overflow-hidden'>
      <Header />
      <div className='w-full h-full grid grid-cols-12 grid-rows-3 gap-y-[75%] bg-[url(/lightGall1.webp)] dark:bg-[url(/gallerybg.webp)] bg-cover md:pb-[4%] lg:pb-[8%] xl:[13%] px-[2%] mx-auto mt-[5%] px-auto'>
        <div className='col-span-12 invert dark:filter-none pt-[7rem] max-w-[40rem] mx-auto my-auto px-auto'>
          <img className='object-cover object-center w-full h-full' src="/gallery-logo.webp" alt="OUR TEAM" />
        </div>
        <div className='col-span-12 text-white flex justify-end gap-x-10 pb-6 mb-3'>
          <div className='bg-gray-500 basis-1/4 h-32'>
            <img src="https://media.istockphoto.com/id/517486990/photo/the-group-of-modern-ballet-dancers.jpg?s=612x612&w=0&k=20&c=TUryi44jtdJuXROqIy0PZ_N71B-dztHZk2OMKErU9ls=" alt="an img" />
            <p>Year 2</p>
          </div>
          <div className='bg-gray-500 basis-1/4 h-32'>
            <img src="https://media.istockphoto.com/id/1134374655/photo/fitness-class-fun.jpg?s=612x612&w=0&k=20&c=jbeY_l1W3XqB5trOcKuzXG8_7Rn159mjCajLT0q9Jf0=" alt="an img" />
            Year 3
          </div>
          <div className='bg-gray-500 basis-1/4 h-32'>
            <img src="https://media.istockphoto.com/id/517486990/photo/the-group-of-modern-ballet-dancers.jpg?s=612x612&w=0&k=20&c=TUryi44jtdJuXROqIy0PZ_N71B-dztHZk2OMKErU9ls=" alt="an img" />
            Year 4
          </div>
        </div>
      </div>

      <div className='UNDERLINE place-content-center items-center mx-auto mb-[2%] w-[70%] sm:w-[20%] h-[7px] dark:bg-white bg-black mt-[2%] rounded-lg'></div>

      <div className='flex justify-center text-lg gap-x-[10%] md:gap-x-[5%] font-semibold'>
        <a onClick={() => handleMediaSelection('image')} className='hover:underline' href="#">Photos</a>
        <a onClick={() => handleMediaSelection('video')} className='hover:underline' href="#">Videos</a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-x-[10%]  place-content-around place-items-center justify-items-center mx-[10%] mt-8 gap-x-[20%] gap-y-16 self-stretch text-xl leading-[normal] min-[1266px]:grid-nowrap">
        {filteredMediaItems.map((item, index) => (
          <div key={index} className="rectangle bg-gray-600 bg-inherit font-bold   shadow-md items-center justify-center overflow-hidden">
            <div className="bg-gray-400 w-80 h-72 ">
              {item.type === 'image' ? (
                <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
              ) : (
                <video controls autoPlay muted className="w-full h-full object-contain ">
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Page;
