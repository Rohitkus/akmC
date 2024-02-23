import React from 'react'

function Contact() {
  return (
    <div>
       <h1 className='p-3'>Contact</h1>
      <div className='mt-10'></div>
      <div className='pl-3 pr-3 md:pl-20 md:pr-20 mt-10' > 
      
       <div className='flex flex-col md:flex-row gap-6  mt-20'> 

        <div className='basis-1/3'> <h1 className='text-center text-4xl'> Enquiry  Form</h1> 
          <div  >
           
           <form action="">
            
            <input type="text" placeholder="Full Name"  class="shadow-sm bg-gray-50 border-2 border-gray-500 text-black text-md rounded-md
             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-5" required />
            
           
            <input type="text" placeholder="Mobile no. "  class="shadow-sm bg-gray-50 border-2 border-gray-500 text-black text-md rounded-md
             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-5" required />
              <input type="email" placeholder="Email "  class="shadow-sm bg-gray-50 border-2 border-gray-500 text-black text-md rounded-md
             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-5" required />

             <textarea placeholder='Message Here. . .' cols="30" rows="7" className='shadow-sm bg-gray-50 border-2 border-gray-500 text-black text-md rounded-md
             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-5' ></textarea>
            <h1 className='text-center'>
             <button type="submit" className='bg-gradient-to-r from-teal-500 from-10% via-teal-300 via-30% to-teal-500 to-90% mt-5
              hover:bg-teal-500 text-black font-bold text-lg py-2 px-8 rounded'>Submit</button>
             </h1>
           </form>
            

                        </div>
                        </div>




        <div className='basis-2/3 text-center'> 
        <h1 className='text-center text-4xl'> Contact Us</h1> 

        <p>Phone : 7895831248</p>
        <p>Email:  Akmcomputer@gmail.com</p>
       <p> Address:  </p>
       <p>Near State Bank Main Branch, Opposite <br />
jayAmbey Tent House,Nadrai Gate,KASGANJ</p>

       
         <p className=''><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3529.1781845291875!2d78.63960631499005!3d27.804285682751836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974e1a73712181b%3A0xf658b9f97697eb34!2sAKM%20Computers!5e0!3m2!1sen!2sin!4v1676258449363!5m2!1sen!2sin"
      className='pt-2 m-auto w-11/12 h-80'   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p> 
        </div>

       </div>
      
      
      </div>
    </div>
  )
}

export default Contact
