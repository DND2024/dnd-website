"use client";
import React, { useState } from 'react';
import { currDesignees as designees22_23 } from '@/app/team/Designees_22_23';
 
import { currJrExecutives as jrExecutives22_23 } from '@/app/team/Jrexecutives_22_23';
 
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

function TeamPage() {
  const [selectedYear, setSelectedYear] = useState('2022-23');

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const getDesignees = () => {
    switch (selectedYear) {
      case '2022-23':
        return designees22_23;
      case '2023-24':
        return designees23_24;
      case '2024-25':
        return designees24_25;
      default:
        return designees22_23;
    }
  };

  const getJuniorExecutives = () => {
    switch (selectedYear) {
      case '2022-23':
        return jrExecutives22_23;
      case '2023-24':
        return jrExecutives23_24;
      case '2024-25':
        return jrExecutives24_25;
      default:
        return jrExecutives22_23;
    }
  };

  const currDesignees = getDesignees();
  const currJuniorExecutives = getJuniorExecutives();

  return (
    <>
      <div className=' dark:bg-[url(/darkbgtest.webp)]  dark:bg-cover bg-[#EFEEE0] bg-cover h-auto my-auto mx-[1%] sm:mx-0 overflow-hidden'>
        <Header />
        <div className='invert dark:filter-none pt-[7rem] max-w-[40rem] mx-auto my-auto px-auto'>
          <img className='object-cover w-full' src="/OUR TEAM.webp" alt="OUR TEAM" />
        </div>
           
           {/* <div className='dark:border-r-orange-50 dark:border-8 h-48 dark:bg-[url(/music-clip.webp)] bg-cover bg-no-repeat'>

           </div> */}
           <div className='invert dark:filter-none w-full h-auto absolute -translate-y-12'>
            <img className='object-cover w-full' src="/music-clip.webp" alt="image" />
           </div>
           
           <div className=' relative'>
        <div className='flex  flex-col md:flex-row  justify-center items-center text-center  w-full px-10 gap-x-[30%]'>
          <div className='UNDERLINE  place-content-center items-center sm:flex-initial   w-[70%] sm:w-[20%] h-[7px] dark:bg-white bg-black mt-10 rounded-lg'></div>
          {/* <div className='BUTTON flex-initial dark:text-black bg-slate-400 rounded-[10px] mt-5 py-[2%] sm:py-2 px-[3%] sm:px-4'>
            <h2 className='font-bold'>YEAR :
              <select className='ml-2 rounded-lg font-bold  bg-white' name="year" id="year" value={selectedYear} onChange={handleYearChange}>
                <option value="2022-23">2022-23</option>
                <option value="2023-24">2023-24</option>
                <option value="2024-25">2024-25</option>
              </select>
            </h2>
          </div> */}
        </div>


           {/* Designees */}

        <div className='text-center max-w-md h-10 mt-8 mb-[20%] sm:mb-0 mx-auto font-bold'>
          <h1 className='dark:text-white font-semibold text-4xl'>CURRENT DESIGNEES</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 md:gap-x-[25%] xl:grid-cols-4 place-content-around place-items-center justify-items-center mx-[10%] mt-8 gap-x-[20%] gap-y-16 self-stretch text-xl leading-[normal] min-[1266px]:grid-nowrap">
          {currDesignees.map((member, index) => (
            <div key={index} className="rectangle  bg-gray-600 bg-inherit font-bold w-64 h-72  rounded-lg shadow-md items-center justify-center overflow-hidden">
              <div className="bg-gray-400 w-full h-3/4 rounded-lg">
                <img src={member.thumbnail} alt={member.name} className="w-full h-full object-contain rounded-lg" />
              </div>
              <div className=" mb-2 text-center mt-1">
                <p className="text-orange-500 truncate mb-[4%]  px-2">{member.name}</p>
                <div className='dark:invert flex justify-center gap-5'>
                  <a href={member.instaLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    <img src="insta.webp" alt="Instagram" className='mt-1 mx-auto social icon' />
                  </a>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    <img src="linkedin.webp" alt="LinkedIn" className='mt-1 mx-auto social icon' />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

       {/* JrExecutive */}

        <div className='text-center max-w-md h-10 mt-8 mx-auto font-bold'>
          <h1 className='dark:text-white font-semibold text-4xl'>JUNIOR EXECUTIVES</h1>
        </div>
           
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 md:gap-x-[25%] xl:grid-cols-4 place-content-around place-items-center justify-items-center mx-[10%] mt-8 gap-x-[20%] gap-y-16 self-stretch text-xl leading-[normal] min-[1266px]:grid-nowrap">
          {currJuniorExecutives.map((member, index) => (
            <div key={index} className="rectangle  bg-gray-600 bg-inherit font-bold w-64 h-72  rounded-lg shadow-md items-center justify-center overflow-hidden">
              <div className="bg-gray-400 w-full h-3/4 rounded-lg">
                <img src={member.thumbnail} alt={member.name} className="w-full h-full object-contain rounded-lg" />
              </div>
              <div className=" mb-2 text-center mt-1">
                <p className="text-orange-500 truncate mb-[4%]  px-2">{member.name}</p>
                <div className='dark:invert flex justify-center gap-5'>
                  <a href={member.instaLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    <img src="insta.webp" alt="Instagram" className='mt-1 mx-auto social icon' />
                  </a>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    <img src="linkedin.webp" alt="LinkedIn" className='mt-1 mx-auto social icon' />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
         

        <div className='text-center max-w-md h-10 mt-8 mx-auto font-bold'>
          <h1 className='dark:text-white font-semibold text-4xl'>FACULTY-IN-CHARGE</h1>
        </div>
    
        {/* Faculty */}

        <div className="rectangle bg-gray-600  bg-inherit font-bold w-64 h-72 rounded-lg shadow-md items-center justify-center mx-auto mt-8 overflow-hidden">
              <div className="bg-gray-400 w-full h-3/4 rounded-lg ">
                <img src='#' alt= 'imj' className="w-full h-full object-contain rounded-lg" />
              </div>
              <div className=" text-center mt-2">
                <p className="text-orange-500 text-xl font-bold truncate px-2">Faculty's name</p>
                <div className='dark:invert flex justify-center gap-5 '>
                  <a href='#' target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    <img src="insta.webp" alt="Instagram" className='mt-1 mx-auto social icon' />
                  </a>
                  <a href='#' target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    <img src="linkedin.webp" alt="LinkedIn" className='mt-1 mx-auto social icon' />
                  </a>
                </div>
               </div>  
              </div>
            </div>

        <Footer />
      </div>
    </>
  );
}

export default TeamPage;
