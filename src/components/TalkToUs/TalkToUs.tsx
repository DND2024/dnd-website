"use client";

import React, { useState } from 'react';

export default function TalkToUs( ) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = { name, email, mobile, message };

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResponseMessage('Thank you for your feedback!');
      } else {
        setResponseMessage('There was an error submitting your feedback. Please try again.');
      }
    } catch (error) {
      setResponseMessage('There was an error submitting your feedback. Please try again.');
    }
  };

  return (

      <div className="sm:min-w-64 md:w-auto relative z-10 sm:translate-y-40 dark:bg-[#000000] dark:shadow-[3px_20px_1px_0px_rgba(44,49,56,1)] shadow-[3px_20px_1px_0px_rgba(170,170,170,1)]  flex flex-grow flex-shrink justify-center rounded-[20px] bg-neutral-400 px-2 sm:py-4 sm:px-14 drop-shadow-lg mt-0 mx-[2%] sm:mx-[15%] ">
        <div className="font-ubuntu flex flex-grow flex-col items-center justify-end pt-[60px] leading-[normal] tracking-[0px] w-full max-w-[800px]">
          <div className="flex flex-grow flex-wrap items-start justify-center gap-x-[20px] md:gap-x-[70px] gap-y-[20px] md:gap-y-[70px] self-stretch min-[924px]:flex-nowrap">
            <div className="flex flex-col items-center justify-left pt-[5px] md:mr-6">
              <img
                className="h-32 max-w-100% md:h-64 md:w-64 shrink-0 object-cover object-center"
                src="contact-image.webp"
                alt="this is an img"
                loading ="lazy"
                
              />
            </div>
            <form onSubmit={handleSubmit} className=" flex w-full md:w-[507px] flex-shrink flex-col items-end gap-y-4 self-stretch leading-[normal] text-[dimgray]">
              <div className="dark:bg-[#262C38] flex items-center self-stretch rounded-[5px] bg-[lightgray] px-3.5 py-1.5">
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="dark:bg-[#262C38] w-full bg-[lightgray] border-none focus:outline-none"
                  placeholder="Name"
                  required
                  
                />
              </div>
              
              <div className="w-full flex flex-wrap sm:flex-nowrap  items-center justify-center gap-x-[1px] gap-y-[13px] min-[924px]:flex-nowrap">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="dark:bg-[#262C38] w-full sm:basis-3/5 sm:mr-3  rounded-[5px] bg-[lightgray] py-1.5 pl-3.5 border-none focus:outline-none"
                  placeholder="Email"
                  required
                />
                <input
                  type="tel"
                  id="mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="dark:bg-[#262C38] w-full sm:basis-2/5   rounded-[5px] bg-[lightgray] py-1.5 pl-3.5 border-none focus:outline-none"
                  placeholder="Mobile No."
                  required
                />
              </div>

              <div className="dark:bg-[#262C38] size-full flex items-start self-stretch rounded-[5px] bg-[lightgray] px-3.5 pb-[11px] pt-[11px]">
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="dark:bg-[#262C38] size-full max-h-20 bg-[lightgray] border-none focus:outline-none"
                  placeholder="Tell us ....."
                  required
                />
              </div>

              <div className="flex items-center justify-end mb-[5%] sm:mb-0 pt-0.5">
                <button
                  type="submit"
                  className="rounded-[5px] bg-purple-700 hover:bg-purple-800 pb-1 pl-7 pr-[26px] pt-[5px] text-center text-[15px] leading-[normal] text-white"
                >
                  Send
                </button>
              </div>

            </form>
          </div>
          {responseMessage && (
            <div className="mt-4 text-center text-white">
              {responseMessage}
            </div>
          )}
          <div className="absolute left-[calc(50%_+_-14px_+_-45.5px)] top-[11px] flex h-7 w-28 flex-shrink-0 items-center justify-center text-center text-2xl font-bold leading-[normal] text-white">
            Talk to Us
          </div>
        </div>
      </div>
   
  );
}

 
