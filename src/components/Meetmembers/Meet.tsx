"use client";

import React, { useState } from 'react';
import { members } from './Members';

export default function Meet( ) {
  const [currentPage, setCurrentPage] = useState(0);
  const membersPerPage = 4;

  // const handleMoreClick = () => {
  //   setCurrentPage((prev) => prev + 1);
  // };

  // const handlePreviousClick = () => {
  //   setCurrentPage((prev) => Math.max(prev - 1, 0));
  // };

  const startIndex = currentPage * membersPerPage;
  const visibleMembers = members.slice(startIndex, startIndex + membersPerPage);

  return (

      <div className=" relative z-0 dark:bg-[#191919] dark:text-white font-ubuntu flex flex-grow flex-col items-center justify-center gap-y-10 rounded-[20px] bg-neutral-300 sm:w-fUll px-11 pb-12 pt-56 leading-[normal] mb-8 tracking-[0px] mx-[2%] sm:mx-[8%]">
       {/* {currentPage > 0 && (
          <a onClick={handlePreviousClick} className="cursor-pointer absolute bottom-3.5 left-3.5 flex h-[18px] w-[59px] flex-shrink-0 items-start justify-start text-left leading-[normal] text-blue-500 hover:underline">
            {"<PREVIOUS"}
          </a>
        )} */}
        <a href='/team' className="cursor-pointer absolute bottom-3.5 right-3.5 flex h-[18px] w-[59px] flex-shrink-0 items-end justify-end text-right leading-[normal] text-blue-500 hover:underline">
          {"MORE>"}
        </a>
        <div className="text-center text-[40px]   leading-[normal]">
          Meet Our Members
        </div>
        <div className="flex flex-wrap items-start justify-center gap-x-16 gap-y-16 self-stretch text-xl leading-[normal] min-[1266px]:flex-nowrap">
          {visibleMembers.map((member, index) => (
            <div key={index} className="rectangle dark:bg-[#414141] bg-gray-200 w-64 h-64 rounded-lg shadow-md flex flex-col items-center justify-center">
              <div className="dark:bg-[#D9D9D9] bg-gray-400 w-full h-3/4 rounded-t-lg">
                <img src= {member.thumbnail} alt={member.name} className="w-full  h-full object-contain rounded-lg" />
              </div>
              <div className="dark:bg-[#414141] text-center mt-2">
                <p>{member.name}</p>
                <a href={member.instaLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{member.instaHandle}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    
  );
}

 
