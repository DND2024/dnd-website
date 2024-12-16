"use client";
import React, { useState } from 'react';
import { currDesignees as designees22_23 } from '@/app/team/Designees_22_23';
import { currDesignees as designees23_24 } from '@/app/team/Designees_23_24';
import { currDesignees as designees24_25 } from '@/app/team/Designees_24_25';
import { currJrExecutive as jrExecutives22_23 } from '@/app/team/Jrexecutives_22_23';
import { currJrExecutive as jrExecutives23_24 } from '@/app/team/Jrexecutives_23_24';
import { currJrExecutive as jrExecutives24_25 } from '@/app/team/Jrexecutives_24_25';
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
      <div className='dark:bg-[url(/bg.webp)] dark:bg-cover bg-[#EFEEE0] h-auto my-auto overflow-hidden'>
        <Header />
        <div className='invert dark:filter-none pt-[7rem] max-w-[40rem] mx-auto my-auto px-auto'>
          <img className='object-cover w-full' src="/OUR TEAM.webp" alt="OUR TEAM" />
        </div>

        <div className='flex justify-end w-full px-10 gap-x-[30%]'>
          <div className='UNDERLINE  flex-initial w-[20%] h-[7px] dark:bg-white mt-10 rounded-lg'></div>
          <div className='BUTTON flex-initial bg-slate-400 rounded-[10px] mt-5 py-2 px-4'>
            <h2 className='font-bold'>YEAR :
              <select className='ml-2 rounded-lg font-bold bg-white' name="year" id="year" value={selectedYear} onChange={handleYearChange}>
                <option value="2022-23">2022-23</option>
                <option value="2023-24">2023-24</option>
                <option value="2024-25">2024-25</option>
              </select>
            </h2>
          </div>
        </div>

        <div className='text-center max-w-md h-10 mt-8 mx-auto font-bold'>
          <h1 className='dark:text-white font-semibold text-4xl'>CURRENT DESIGNEES</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-around place-items-center justify-items-center mx-20 mt-8 gap-x-16 gap-y-16 self-stretch text-xl leading-[normal] min-[1266px]:grid-nowrap">
          {currDesignees.map((member, index) => (
            <div key={index} className="rectangle  bg-gray-700 dark:bg-transparent  font-bold w-64 h-80 rounded-lg shadow-md items-center justify-center overflow-hidden">
              <div className="bg-gray-400 w-full h-3/4 rounded-b-lg">
                <img src={member.thumbnail} alt={member.name} className="w-full h-full object-contain rounded-lg" />
              </div>
              <div className=" dark:invert mb-2 text-center mt-1">
                <p className="truncate px-2">{member.name}</p>
                <div className='flex justify-center gap-5'>
                  <a href={member.instaLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    <img src="insta.webp" alt="Instagram" className='mt-1 mx-auto social icon' />
                  </a>
                  <a href={member.instaLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    <img src="linkedin.webp" alt="LinkedIn" className='mt-1 mx-auto social icon' />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='text-center max-w-md h-10 mt-8 mx-auto font-bold'>
          <h1 className='dark:text-white font-semibold text-4xl'>JUNIOR EXECUTIVES</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-around place-items-center justify-items-center mx-20 mt-8 gap-x-16 gap-y-16 self-stretch text-xl leading-[normal] min-[1266px]:grid-nowrap">
          {currJuniorExecutives.map((member, index) => (
            <div key={index} className="rectangle bg-transparent w-64 h-80 rounded-lg shadow-md items-center justify-center overflow-hidden">
              <div className="bg-gray-400 w-full h-3/4 rounded-lg ">
                <img src={member.thumbnail} alt={member.name} className="w-full h-full object-contain rounded-lg" />
              </div>
              <div className="dark:invert text-center mt-2">
                <p className="truncate px-2">{member.name}</p>
                <div className='flex justify-center gap-5 '>
                  <a href={member.instaLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    <img src="insta.webp" alt="Instagram" className='mt-1 mx-auto social icon' />
                  </a>
                  <a href={member.instaLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
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

        <div className="rectangle bg-transparent w-64 h-80 rounded-lg shadow-md items-center justify-center mx-auto mt-8 overflow-hidden">
              <div className="bg-gray-400 w-full h-3/4 rounded-lg ">
                <img src='#' alt= 'imj' className="w-full h-full object-contain rounded-lg" />
              </div>
              <div className="dark:invert text-center mt-2">
                <p className="truncate px-2">Faculty's name</p>
                <div className='flex justify-center gap-5 '>
                  <a href='#' target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    <img src="insta.webp" alt="Instagram" className='mt-1 mx-auto social icon' />
                  </a>
                  <a href='#' target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    <img src="linkedin.webp" alt="LinkedIn" className='mt-1 mx-auto social icon' />
                  </a>
                </div>
              </div>
            </div>

        <Footer />
      </div>
    </>
  );
}

export default TeamPage;
