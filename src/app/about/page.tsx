"use client"
import Header from '@/components/Header/Header'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
 import 'swiper/css';
 import 'swiper/css/pagination';
 import '@/app/globals.css';
import { Navigation,Pagination, Autoplay, Keyboard } from 'swiper/modules';
import Footer from '@/components/Footer/Footer';
 
 

function page() {

  return (
  
    <div className='relative dark:bg-[url(/darkbgtest.webp)]  dark:bg-cover bg-[#EFEEE0] bg-cover h-auto my-auto mx-[1%] sm:mx-0 overflow-hidden'>
        <Header />
        <div className='invert dark:filter-none place-items-center pt-[7rem] max-w-[40rem] mx-auto my-auto px-auto'>
          <img className='object-cover ' src="/ABOUT.svg" alt="OUR TEAM" />
        </div>
           
           {/* <div className='dark:border-r-orange-50 dark:border-8 h-48 dark:bg-[url(/music-clip.webp)] bg-cover bg-no-repeat'>

           </div> */}
           <div className='invert dark:filter-none w-full h-auto absolute -translate-y-12'>
            <img className='object-cover w-full' src="/music-clip.webp" alt="image" />
           </div>
             
              <div className='UNDERLINE  place-content-center items-center mx-auto mb-[5%] w-[70%] sm:w-[20%] h-[7px] dark:bg-white bg-black mt-[2%] rounded-lg'></div>
           
              <div className='Rectangle relative mx-auto mb-[5%] rounded-3xl sm:w-[70%] p-[2%] bg-[#FF7700] opacity-[70%] dark:bg-[#FF7700] dark:bg-opacity-[8%] dark:text-[#ffffff] text-xl sm:text-justify sm:tracking-wide  flex flex-col'>
                  <p className='mb-4'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis atque in eos dolorum facilis ipsam? Minima debitis quidem aliquid odio similique corporis at? Pariatur, est atque blanditiis incidunt odio maxime qui culpa quam molestiae non architecto! Doloremque at est sapiente. Error laboriosam, blanditiis ea repellendus alias e
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, tempore?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, consequatur. Delectus architecto fuga dolore voluptate laboriosam expedita suscipit quo alias!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nulla natus corrupti, tenetur nihil cum quasi nobis similique soluta optio?
                   </p>
                  <div className='flex justify-end'>
                    <img src="dnd-logo-white.webp" alt="DND Logo" className="w-24 md:w-32" />
                  </div>
              </div>


           <h2 className='font-semibold text-3xl ml-[10%] underline'>How it started</h2>
             
             <div className='HOW IT STARTED leading-normal my-[3%] sm:text-justify sm:tracking-wide text-xl lg:text-2xl px-[2%] mx-[10%] '>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At adipisci facere assumenda magni asperiores ad consectetur praesentium, ab debitis quia eaque reiciendis quasi officia ipsa, maiores vel impedit nostrum temporibus autem qui. Vero corporis quod molestias. Voluptates cum aspernatur veritatis ea architecto nisi asperiores harum necessitatibus eligendi cumque quae quibusdam corrupti libero labore debitis velit et quia amet, ex eaque nostrum minima nam veniam facere. Commodi nam, a qui, sit, et veniam quisquam incidunt eius modi harum eaque deserunt obcaecati.

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore mollitia quod cupiditate voluptate exercitationem soluta, saepe iusto error? Qui maxime fugit ea, voluptatum officia blanditiis dolores! Debitis aspernatur eligendi iusto obcaecati delectus ad quo nobis cupiditate non inventore veritatis nemo voluptatum sit maxime blanditiis neque provident dolor qui iure, perferendis minima facilis voluptas officia illo! Voluptatem sunt corrupti aliquam libero illum consectetur est quis neque quae doloremque obcaecati et beatae aperiam, delectus vel veritatis assumenda nesciunt minima fuga id ad quidem. Obcaecati, doloribus eum aliquid possimus vel quae repudiandae. Corporis reiciendis quae earum, velit reprehenderit rem natus tempore nesciunt quaerat enim aut repudiandae vitae odit distinctio nam. Soluta, quam totam ipsa fuga repellat quasi voluptate iusto accusamus, praesentium perferendis mollitia aperiam? Laboriosam itaque optio, error consectetur aliquid inventore at hic dolore omnis aliquam modi sint deserunt nulla qui officia repudiandae eligendi vero voluptas incidunt illum molestiae? Molestias quas sed perferendis harum nostrum exercitationem, totam consectetur vel ipsa suscipit quam numquam tenetur, dignissimos iusto architecto ad sapiente, beatae quaerat. Accusamus, consequuntur aperiam maxime officiis aliquid accusantium doloribus error, impedit quod id atque, aut suscipit ex laboriosam cumque eum. Minus, repudiandae itaque unde temporibus sequi iusto ea quae. Debitis consequatur mollitia optio!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quod libero illo aperiam nobis tenetur quaerat praesentium saepe numquam, nostrum dignissimos enim eos impedit accusamus sapiente ratione? Odio, dicta deleniti. Corrupti quia eaque placeat. Consequuntur nobis reiciendis voluptatem similique ratione error unde deserunt architecto natus officiis quibusdam eum, animi rerum!

                </p>

             </div>
         
             <Swiper 
                style={{

                  
                  "--swiper-pagination-color": "#f55e04",
                  // "--swiper-pagination-top": "auto",
                  "--swiper-pagination-margin-top":"30px" ,
                  "--swiper-pagination-bullet-inactive-color": "#999999",
                  "--swiper-pagination-bullet-inactive-opacity": "1",
                  "--swiper-pagination-bullet-size": "16px",
                  "--swiper-pagination-bullet-horizontal-gap": "6px",
                  "--swiper-pagination-bullet-vertical-gap": "4px"
                   
                }}
                spaceBetween={20} 
                slidesPerView={1} 
                loop={true}
                 autoplay={{delay:2000 }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,  
                }}

                keyboard= {{
                  enabled: true,
                  onlyInViewport: false,
                }}
                modules={[Pagination,Keyboard,Autoplay]}
                className="myslider "
              >
                <SwiperSlide style={{height:"400px"}}> 
                  <div className='bg-inherit  w-[60%]  md:w-[45%] md:h-24 mx-auto rounded-lg mb-[5%]'>
                     <div className='w-full border-gray-600 md:h-25 
                     min-[772px]:h- lg:h-80 rounded-lg overflow-hidden'>
                       <img  src='/bg-image.webp' alt='img'    />
                     </div>
                    <p>Batch 2021</p>
                  </div>
                </SwiperSlide>

                <SwiperSlide style={{height:"400px"}}> 
                  <div className='bg-inherit  w-[60%]  md:w-[45%] md:h-24 mx-auto rounded-lg mb-[5%]'>
                     <div className='w-full border-gray-600 md:h-25 
                     min-[772px]:h- lg:h-80 rounded-lg overflow-hidden'>
                       <img  src='https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='img'    />
                     </div>
                    <p>Batch 2022</p>
                  </div>
                </SwiperSlide>

                <SwiperSlide style={{height:"400px"}}> 
                  <div className='bg-inherit  w-[60%]  md:w-[45%] md:h-24 mx-auto rounded-lg mb-[5%]'>
                     <div className='w-full border-gray-600 md:h-25 
                     min-[772px]:h- lg:h-80 rounded-lg overflow-hidden'>
                       <img  src='https://media.istockphoto.com/id/1134374655/photo/fitness-class-fun.jpg?s=612x612&w=0&k=20&c=jbeY_l1W3XqB5trOcKuzXG8_7Rn159mjCajLT0q9Jf0=' alt='img'    />
                     </div>
                    <p>Batch 2023</p>
                  </div>
                </SwiperSlide>

                <SwiperSlide style={{height:"400px"}}> 
                  <div className='bg-inherit  w-[60%]  md:w-[45%] md:h-24 mx-auto rounded-lg mb-[5%]'>
                     <div className='w-full border-gray-600 md:h-25 
                     min-[772px]:h- lg:h-80 rounded-lg overflow-hidden'>
                       <img  src='https://media.istockphoto.com/id/517486990/photo/the-group-of-modern-ballet-dancers.jpg?s=612x612&w=0&k=20&c=TUryi44jtdJuXROqIy0PZ_N71B-dztHZk2OMKErU9ls=' alt='img'    />
                     </div>
                    <p>Batch 2024</p>
                  </div>
                </SwiperSlide>

                <SwiperSlide style={{height:"400px"}}> 
                  <div className='bg-inherit  w-[60%]  md:w-[45%] md:h-24 mx-auto rounded-lg mb-[5%]'>
                     <div className='w-full border-gray-600 md:h-25 
                     min-[772px]:h- lg:h-80 rounded-lg overflow-hidden'>
                       <img  src='https://www.shutterstock.com/image-photo/happy-children-dancing-group-little-600nw-2167400913.jpg' alt='img' className='object-cover'   />
                     </div>
                    <p>Batch 20XX</p>
                  </div>
                </SwiperSlide>

                 

                
      </Swiper>
         

      <Footer/>
     
             
            

    </div>
    
      
  )
}

export default page