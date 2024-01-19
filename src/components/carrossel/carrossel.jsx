
"use client"
import './carrossel.scss'
import {Swiper, SwiperSlide} from "swiper/react"
import {Navigation, Pagination, Autoplay} from "swiper/modules"

import './carrossel.scss'

export default function Carrossel(){
    return(
        <>
         
        <h1>SLide</h1>

        <Swiper
        autoplay={{
          delay:500
        }}
        modules={[Navigation, Autoplay]}
        >
          <SwiperSlide>
            <div className='h-screen w-full a1'>
            Hello
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-screen w-full a2'>
            Hello
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-screen w-full a3'>
            Hello
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-screen w-full a4'>
            Hello
            </div>
          </SwiperSlide>
        </Swiper>

        
        </>
    )
}
            
           