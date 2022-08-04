import React,{useEffect, useState} from 'react'
import img4 from '../assets/dom4.jpg'
import img5 from '../assets/boy3.webp'
import img2 from '../assets/boy1.jpg'
import img3 from '../assets/boy2.jpg'
import {FaDribbbleSquare, FaFacebookSquare,
 FaInstagram, FaTwitter, } from 'react-icons/fa'
 
import {Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

const Hero = () => {
 
  return (
    <div className='text-white w-[60%] mx-auto flex-col px-4 py-16'>
    
  
      <div className='flex mx-auto overflow-hidden relative'>

<Carousel showIndicators='false' showThumbs='false' autoPlay interval='4000' infiniteLoop transitionTime={500} showArrows={true}
>
  
    <img src={img2} alt='/' className='rounded-sm'/>
    <img src={img4} alt='/' className='rounded-md'/>
    <img src={img5} alt='/' className='rounded-md'/>
        
  
  
</Carousel>
      </div>
        <div className='max-w-[800px] justify-center w-full  mx-auto text-center flex flex-col'>
         <p className='text-green-600 font-bold p-2'>GROWING TOGETHER WITH THE BOYCHILD</p>
                 
        </div>
       

    </div>

  )
}


const Newsletter= () => {
  return (
    <div className='w-full mt-2 py-16 text-white'>
      <div className='max-w-[1248px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 mr-7'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold'>Rationale </h1>
          <p>In Uganda, with most programs targeting the girls, the boy child has
             been unintentionally segregated. This has hence led to the marginalization 
             of the boy child who has often felt left out to fend for themselves and forge
              their own pathways amidst a globalized multi-faceted contemporary world where
               a flashy celebrity lifestyle combined with unending peer-pressure is considered normal
                and legitimate.  The role of the parents to the boy child in the modern world is fast 
                fading away at the expense of societal values and virtues hence certain cultural traits 
            are becoming a thing of the past. </p>

        </div>
        <div className='my-4'>
          <p>Sign up to our news letter to stay upto date </p>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input type='email' placeholder='Enter email' className='p-3 flex w-full rounded-md text-black m-4'/>
            <button className='bg-green-600 text-black rounded-md font-medium w-[200px] py-3 ml-4 my-6 px-6'>Subscribe</button>
          </div>
          <p>We care about th protection of your data. Read our <span className='text-green-600'>privacy</span>  </p>
        </div>
      </div>
      
    </div>
  )
}


const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1248px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full shadow-xl mt-2 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-100'>
          <img className='w-20 mx-auto mt-[-3rem] bg-white 'src={img2} alt='/'/>
          <h2 className='text-2xl text-center py-8 font-bold' >CEO</h2>
          <p className='text-center font-medium text-4xl'>Mr. Gatare Elijah</p>
          
         
        </div>

        <div className='w-full mt-2 bg-gray-100  shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-100'>
          <img className='w-20 mx-auto bg-transparent mt-[-3rem] bg-white 'src={img2} alt='/'/>
          <h2 className='text-2xl text-center font-bold py-8' >Head Mentoring</h2>
          <p className='text-center text-4xl font-medium'>Mr. Ben</p>
          
         
        </div>

        <div className='w-full mt-2 shadow-xl font-bold flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-100'>
          <img className='w-20 mx-auto mt-[-3rem] bg-white 'src={img2} alt='/'/>
          <h2 className='text-2xl text-center py-8' >Head Ict</h2>
          <p className='text-center text-4xl font-medium'>Rukundo Jonah</p>
         
        </div>
         
      </div>
      
   
    </div>
  )
}


const Footer = () => {
  return (
    <div className='max-w-[1240px] mt-4 mx-auto px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-slate-400 mx-auto'>Social Media</h1>
       
        <div className='flex  my-6 justify-between'>
          <FaFacebookSquare size={30}/>
          <FaInstagram size={30}/>
          <FaTwitter size={30}/>


        </div>

       
      </div>
    </div>
  )
}





export {Hero, Footer, Newsletter, Cards}