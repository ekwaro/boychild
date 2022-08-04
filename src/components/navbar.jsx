import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import logo from '../assets/logo.jpg'
const Navbar = () => {
  const [nav, setnav]= useState(false)
  const handleNav =()=>{
    setnav(!nav)
  }
  return (
    <div className='text-white flex mx-w-[1240px] mx-auto font-bold justify-between items-center h-24'>
      <div className='flex flex-row '>
        <img className='rounded-full w-10 h-10'  src={logo} alt='/'/>
      <h1 className='w-full text-3xl ml-1 animate text-blue-600'>Bo<span className='text-slate-200'>Y</span>cHiLd</h1>
      </div>
     
     <ul className='hidden md:flex'>
      <li className='p-4'><Link to='/'>Home</Link> </li>
      <li className='p-4'><Link to='/about'>About US</Link></li>
      <li className='p-4'><Link to='/parents'>Succes Stories</Link> </li>
      <li className='p-4'><Link to='/mentors'>Mentors</Link></li>
      <li className='p-4'><Link  to='/events'>Events</Link></li>
      <li className='p-4'><Link to='/contact'>Contact</Link> </li>
        
     </ul>
     <div onClick={handleNav} className='block md:hidden'>
      {!nav?<AiOutlineMenu size={20}/>:<AiOutlineClose size={20}/>}
      
     </div>
     <div className={nav?'fixed left-0 top-0 w-[60%] bg-black border-r h-full border-r-gray-900 ease-in-out duration-500':'fixed left-[-100%] '}>
      <div className='flex'>
      <img className='rounded-full w-10 h-10'  src={logo} alt='/'/>
     <h1 className='w-full text-3xl text-blue-600'>Bo<span className='text-white'>Y</span>Child</h1>
      </div>
     
      <ul className=' uppercase'>
        <li className='p-4 border-gray-600'><Link to='/'> Home </Link></li>
        <li className='p-4 border-gray-600'><Link to='/about'>About Us </Link>  </li>
        <li className='p-4 border-gray-600'><Link to='/parents'>Success Stories</Link></li>
        <li className='p-4 border-gray-600'><Link to='/mentors'> Mentors</Link></li>
        <li className='p-4 border-gray-600'><Link to='/contact'> Contact </Link></li>
        <li className='p-4 border-gray-600'><Link to='/events'> Events </Link></li>
           
      </ul>

     </div>
    </div>
  )
}

export default Navbar