import React,{useState} from 'react'
import { Footer } from './Hero'
import {AiOutlineMail, AiOutlinePhone,} from 'react-icons/ai'
import {FaLocationArrow, FaWhatsapp} from 'react-icons/fa'
import img4 from '../assets/dom4.jpg'
import img2 from '../assets/boy1.jpg'
import img3 from '../assets/boy2.jpg'
import img5 from '../assets/pic.jpeg'
import Navbar from './navbar'
const About = () => {
    const [showmore, setShowmore] = useState(false)
    let data = `The 21st century manifests a high level of globalization
    the world has never seen in any century of human evolution. 
    Highlighted and boosted by the rise of technological inventions 
    such as the internet, the pattern of global socioeconomic, political 
    and cultural evolution has certainly taken a newer twist prompting more
    intricacies especially in the arena of societal values.
    
    As such, the boy 
            child has been left castigated, alone and in the den of misguided beliefs 
            surrounding their every existence. Amidst all this, society isn’t doing 
            enough to raise boys into responsible adults. Some could attribute this to
            the sudden rise of feminism as a dominant force in the socio-political 
            realm and others may point towards society’s over-reliance on the 
            fast-changing contemporary global trends perpetuated through cultural 
            differences, religion, education and boundaries to help raise kids.
            
            `


  return (
    <div>
        <Navbar/>
         <div className='py-4 w-[80%] mx-20 bg-white shadow-md px-6 rounded-md'>
            <h1 className='text-black text-4xl font-bold'>Background</h1>
            <p className='bg-gray-100 py-6 mx-auto font-light '>
                {
                    showmore?data:`${data.substring(0,600)}`
                }
                <button onClick={()=>setShowmore(!showmore)} className='bg-green-400 p-1 font-semibold text-white rounded-sm'>
                    {showmore?'show less':'show more'}
                </button>
            
            </p>
            <p className='mt-2 mx-auto'>
            
            </p>
            <div className='bg-gray-100 p-6'>
            <p className='mt-2 text-left font-extralight'>
            Whatever side of the coin you would relate with, it’s quite evident
                that the boy child has been left dumb folded about the everyday social 
                issues affecting them. This has in the long run left them quite obstinate and because they can’t open up about the situation, many run astray and grow up to be irresponsible citizens.  The contemporary society has unintentionally construed boys to mask wearing vigilantes. Boys have been inadvertently made to think   that they should always cover up what they truly feel about certain circumstances. This has often led boys to a host of vices not limited to drug abuse, gang involvement, betting practices and this often has negative impacts on what they transform into in the future.



            </p>
            </div>
           
            
                        
         </div>

         <div className='flex flex-col bg-white my-20 p-5 md:flex-row rounded-sm  justify-between w-[90%] mx-auto items-center' >
            <div className='w-[90%] bg-gray-100 px-2 pb-5  rounded-md'>
                <h1 className='font-bold text-3xl underline'>Goals and Objectives</h1>
                <p className='mt-3 bg-gray-100 font-extralight'>
                Our ultimate goal is a Ugandan society where the boy child 
                enjoys his full rights, lives to fulfil his utmost potential
                 whilst playing their rightful and constructive role in society. 
                 We envision a society where a properly raised and empowered boy
                  will eventually lead to a safer and well-disciplined generation
                </p>
            </div>
            <div className='px-5 bg-gray-100 ml-2 p-4 mt-4 rounded-md'>

                <p className='font-extralight'>
                This is because we believe that every individual
                 if guided appropriately can live a better life and what 
                 better way to do this than to confide in someone who will be
                  there to walk every part of this life
                 journey with you. We aim to do this through: 

                </p>

                <ul className='font-extralight mt-4 p-3'>
                    <l1>
                    •	Using sports e.g. football training to educate, train 
                    and encourage networking of the lads with those of similar ambitions. 
                    </l1>

                    <li>
                    •	Organizing weekend and holiday camps to educate, train,
                     instill discipline and societal norms in the boys. 
                    </li>
                    <li>
                    •	Training boys to turn into responsible men and advocates for positive parenting and fatherhood 
                    with the right social skills to maneuver through this fast-paced world.
                    </li>

                    <li>
                    •	Continuous mentoring through face to face and digital sessions. 
                    </li>
                    <li>
                    •	Using mind-boggling board games to build financial and social literacy. 
                    </li>

                </ul>

            </div>
            
        </div>
        <Footer/>

        </div>
            
      
          
    
  )
}
const Mentors=()=>{ 
    const data = [
        {name:'Ekwaro Dominic', image:img5, contact:'0752141818', description:'Website developer with a special skill in teaching and mentoring youths', email:'dominicnoelchris@gmail.com'},
        {name:'Gatare Elijah', image:img3, contact:'0752141818', description:'Website developer with a special skill in teaching and mentoring youths', email:'dominicnoelchris@gmail.com'},
        {name:'Rukundo Jonah', image:img2, contact:'0752141818', description:'Website developer with a special skill in teaching and mentoring youths', email:'dominicnoelchris@gmail.com'},
        {name:'Okoth James', image:img2, contact:'0752141818', description:'Website developer with a special skill in teaching and mentoring youths', email:'dominicnoelchris@gmail.com'},
        
    ]
    return(
        <div>
            <Navbar/>
            <div className='bg-white flex flex-col rounded-md mx-20  md:grid md:grid-cols-3  gap-4'>
                {data.map(info=>{
                    return(<div className='bg-gray-200 rounded-md mt-2 mx-4 '>

                    <img src={info.image} alt='/' className='rounded-full h-20 w-20 mt-2 mb-2 mx-auto'/>
                    <div className='bg-white p-2 rounded  m-2'>
                    <h1 className='border-b'>{info.name}</h1>
                    <h3 className='border-b'>{info.contact}</h3>
                    <h3 className='border-b'>{info.email}</h3>
                    <h3 className='text-sm font-semibold'>{info.description}</h3>

                    </div>
                   
                    
                    </div>)
                })}


            </div>

            <Footer/>
        </div>
    )
}
const Contacts=()=>{
    return(
        <div className=''>
            <Navbar/>
            
            <div className='mt-[50px]   mx-auto bg-white p-4  h-[400px] rounded-md'>
                <div className='bg-gray-200 p-2'>
                    <p className='font-extralight text-xl p-5'><FaLocationArrow size={40}/> We are located at plot 40, Kampla Uganda</p>
                    <p className='font-mono text-xl justify-items-center px-5 '><AiOutlinePhone size={40}/>0783179719
                    </p>
                    <p className='px-5'><FaWhatsapp size={40} />0783179719</p>
                    <p className='font-serif text-xl mt-5 px-5 cursor-pointer'><AiOutlineMail size={40}/> <span className='underline text-blue-600'>tangajenkins79@gmail.com</span> </p>
                </div>
            </div>
           
            <Footer/>

        </div>
    )    
}
const Parents=()=>{
    return(
        <div>
            <Navbar/>
            <Footer/>

        </div>
    )
}

const Events=()=>{
    return(
        <div>
            <Navbar/>
            <div className='bg-white h-screen mx-32 rounded'>
                <div className='bg-gray-200 mx-20 mt-5 rounded-lg'>
                    <p className='font-light text-center mt-4 p-10'>No Events yet</p>

                </div>
            </div>
            <Footer/>

        </div>
    )

}

export {About, Events, Parents, Mentors, Contacts}