import React, { useRef } from 'react'
import './WorkExpriance.css'
import { WORK_EXPERIENCE } from '../../utils/data'
import WorkExprianceCard from './WorkExprianceCard/WorkExprianceCard'
import Slider from "react-slick"
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';
import Icon from '@mdi/react';

import Navbar from '../Navbar/Navbar'
import left from '../../Asset/left.png'

import AppRouter from '../../AppRouter'
function WorkExpriance() {
  const sliderRef= useRef();

  const settings= {
    dots:false,
    infinite:true,
    speed:500,
    slidesToShow:2,
    slidesToScroll:1,
    arrows:false,
    responsive:[
      {
        breakpoint:769,
        settings:{
          slidesToShow:1,
          slidesToScroll:1,
        },
      
      },

    ],
  };



  const slideRight =()=>{
    sliderRef.current.slickNext();
  }

  const slideLeft=()=>{
    sliderRef.current.slickPrev();
  }

  return (
    <div> 
    {/* <Navbar/> */}
    <section className='experience-container'> 
    <h5>Work Experience</h5>
    <div className='experience-content'>
    <div className='arrow-right' onClick={slideRight}>
     <span className='material-symbol-outlined'>
         <img src={left} />
     </span>

    </div>

    <div className='arrow-left' onClick={slideLeft}>
    <span className='material-symbol-outlined'>
     <img src={left} />

     </span>

    </div>

    <Slider ref={sliderRef} {...settings}>

    {WORK_EXPERIENCE.map((item)=>(
        <WorkExprianceCard key={item.title} details={item}  />
        ) )}
    </Slider>


    </div>
      
    </section>
    </div>
  )
}

export default WorkExpriance
