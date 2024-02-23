import React from 'react'
import  el from '../assets/elearning.png'
import  fb from '../assets/facebook.svg'
import  insta from '../assets/instagram.svg'
import  li from '../assets/linkedin.svg'
import  yt from '../assets/youtube.svg'


function Footer() {
  return (
    <div className='mt-3'>


     <div className='bg-teal-900'>
            <div  class="flex flex-col md:flex-row  md:px-20 space-x-0 md:space-x-5 mt-5 md:mt-0  text-center text-white">
              {/*section 1 */}
            <div class=" w-full md:w-1/3   mt-5 md:mt-0 backdrop-blur-sm bg-teal/30 rounded-md  ">
               <img src={el} alt="" width={150}  height={200} className=' m-auto'/>
              <p className='text-2xl'> <span className='text-3xl'> <strong> AKM  </strong></span>  <strong>Computer Institute</strong> </p>
              <p>Abhishek Kumar Maheshwari</p>
              <p className=''> Mob.  9648782072</p>
              <div className='flex justify-center gap-5 mt-3'>
                
                <img src={fb} alt="" width={35}  className='cursor-pointer '/>
                <img src={insta} alt="" width={35} className='cursor-pointer'/>
                <img src={li} alt="" width={35} className='cursor-pointer'/>
                <img src={yt} alt="" width={35} className='cursor-pointer'/>

              </div>
               </div>
               
              {/* section2 */}
               <div class=" w-full md:w-1/3   mt-5 md:mt-0 backdrop-blur-sm bg-teal/30 rounded-md  text-sm  ">
                
                <div className='text-2xl'><strong>COURSES</strong></div> 

                <p className='p-1'>Programming languages</p>
                <p className='p-1'>Data Stracture and Algorithm</p>
                <p className='p-1'>Advance Excel</p>
                <p className='p-1' >Full stack Web Dovelopement</p>
                <p className='p-1'>Data Analysis</p>
                <p className='p-1'>AutoCad 2D & 3D</p>
                <p className='p-1'>B.Tech all syllabus</p>
                <p className='p-1'>MCA All Courses</p>
                <p className='p-1'> Polytechnic CS</p>
                <p className='p-1'>Tally Prime</p>
                <p className='p-1'>Data Analysist</p>
              
               </div>

              {/* section3 */}
               <div class=" w-full md:w-1/3   mt-5 md:mt-0 backdrop-blur-sm bg-teal/30 rounded-md  text-sm ">
               <div className='text-2xl'><strong>CONTACT US</strong></div> 
               <div> 
                <p className='p-1'> Phone   7895831248</p>
                <p className='p-1'>akmcomputers123@gmail.com</p>
                <p className='p-1'>Address : <br />
Near State Bank Main Branch, Opposite <br />
jayAmbey Tent House,Nadrai Gate,Kasganj</p>
<p className=''><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3529.1781845291875!2d78.63960631499005!3d27.804285682751836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974e1a73712181b%3A0xf658b9f97697eb34!2sAKM%20Computers!5e0!3m2!1sen!2sin!4v1676258449363!5m2!1sen!2sin"
      className='pt-2 m-auto'   width="250" height="180" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>



               </div>
               </div>
            
            </div>
          </div>
    </div>
  )
}

export default Footer
