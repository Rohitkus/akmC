import React from "react";
import react from "../assets/codeimg.svg";
import { useTypewriter } from "react-simple-typewriter";
import { FaJava, FaJs, FaPython, FaBootstrap } from "react-icons/fa";
import meeting from '../assets/meeting.gif'

import rocket from '../assets/rocket.gif'
import php from '../assets/php.gif'



export default function Home() {
  const [text] = useTypewriter({
    words: [
      "Java",
      "Python",
      "C & C++",
      "FrontEnd",
      "Backend",
      "FullStack",
      "Ms Office",
    ],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 30,
    delaySpeed: 1300,
  });
  return (
    <>
      <div className="wrapper  w-full z-10">
        rohit kumar
        <div className="mt-5">
          <div className="  justify-between px-2 md:px-20 md:py-20  py-5 md:flex ">
            <div className="md:w-1/2  w-full ">
              <h1 className="text-3xl  md:text-6xl mt-5">
                Welcome To The AKM Computer Institute
              </h1>
              <h2 className="text-2xl mt-5">
                {" "}
                Best Institute for Computer Learning
              </h2>
              <h1 className="text-4xl md:text-6xl">Learn ...{text}</h1>
              <p className="mt-3  text-sm md:text-lg ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur ratione, rem ea a corrupti porro mollitia minima
                deleniti voluptates, magnam quod nobis dolore, !
              </p>

              <a href="/course" className="">
                <button class="bg-gradient-to-r from-teal-500 from-10% via-teal-300 via-30% to-teal-500 to-90% mt-5 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded">
                  View Courses
                </button>
              </a>
            </div>
            <div className="md:w-1/2  w-full flex justify-center">
              <img src={react} alt="" width={500} className="hover:drop-shadow-2xl " />
            </div>
          </div>

          {/* 2nd portion Heme page */}
         
            <div  >
              <div class="flex flex-col md:flex-row px-3 md:px-20 space-x-0 md:space-x-5 mt-5 md:mt-0">
                <div class=" w-full md:w-1/3   mt-5 md:mt-0 backdrop-blur-sm bg-teal/30 rounded-xl  ">
                  
                  <div className=" w-full shadow-lg shadow-teal-400   hover:scale-105 translate ease-out duration-500 rounded-xl ">
                    <div className="bg-gradient-to-r from-teal-500 from-10% via-teal-200 via-30% to-teal-500 to-90%
                     text-center text-xl md:text-2xl p-2 rounded-t-xl ">BTech Syllabus</div>
                    <div className="bg-white p-2 border-x-2 border-b-2 border-teal-500 rounded-b-xl text-center">
                      <div className="pt-5  border-b-2 border-gray-100 ">All Programing Languages</div>
                      <div className="pt-5  border-b-2 border-gray-100  ">DataStracture And Algorithms</div>
                      <div className="pt-5  border-b-2 border-gray-100  ">Web Technologies</div>
                      <div className="pt-5  border-b-2 border-gray-100  ">FrontEnd And BackEnd</div>
                    </div></div>                             
                </div> 
                {/* ffffffffffffffffffffffffffffff*/}
                  <div class=" w-full md:w-1/3   mt-5 md:mt-0 backdrop-blur-sm bg-teal/30 rounded-xl  ">
                  
                  <div className=" w-full     shadow-lg shadow-teal-400  hover:scale-105 translate ease-out duration-500  rounded-xl ">
                    <div className="bg-gradient-to-r from-teal-500 from-10% via-teal-200 via-30% to-teal-500 to-90%
                     text-center text-xl md:text-2xl p-2 rounded-t-xl    ">Web Technologies</div>
                    <div className="bg-white p-2 border-x-2 border-b-2 border-teal-500 rounded-b-xl text-center">
                      <div className="pt-5  border-b-2 border-gray-100  ">HTML  Css    JavaScript </div>
                      <div className="pt-5  border-b-2 border-gray-100  ">BootStreapCss  TailwindCss</div>
                      <div className="pt-5  border-b-2 border-gray-100">React Redux  Nodejs Expressjs</div>
                      <div className="pt-5  border-b-2 border-gray-100 ">MongoDB MY_Sql</div>
                    </div>
                    
                  </div>
                </div>
                {/* nnnnnnnnnnnnnnnnnnnnnnnnnnn */}

                <div class=" w-full md:w-1/3   mt-5 md:mt-0 backdrop-blur-sm bg-teal/30 rounded-xl  ">
                  
                  <div className=" w-full     shadow-lg shadow-teal-400  hover:scale-105 translate ease-out duration-500 rounded-xl ">
                    <div className="bg-gradient-to-r from-teal-500 from-10% via-teal-200 via-30% to-teal-500 to-90%
                     text-center text-xl md:text-2xl p-2 rounded-t-xl   ">Data Analyst</div>
                    <div className="bg-white p-2 border-x-2 border-b-2 border-teal-500 rounded-b-xl  text-center">
                      <div className="pt-5  border-b-2 border-gray-100  ">Buseness Statics</div>
                      <div className="pt-5  border-b-2 border-gray-100  ">Excel Basic to Advance </div>
                      <div className="pt-5  border-b-2 border-gray-100  ">Tabule/PowerBI My_Sql</div>
                      <div className="pt-5  border-b-2 border-gray-100  ">Pyton/R Languahe</div>
                    </div>
                    
                  </div>
                </div>
                {/* jhfdaldkjgahsjdghakjdshalkjsd */}
              </div>
            </div>
          

          {/* W hyUS Section*/}
        
          <div  className="mt-10  mx-2  md:mx-20 rounded-2xl ">
          <h1  className="text-center"><button className="p-2 bg-gradient-to-r from-teal-600 from-10% via-teal-300 via-30% to-teal-500 to-90% mt-3 mb-2 rounded-full px-5 text-white font-bold cursor-default" > Whu Us</button></h1>
            <div  class="flex flex-col md:flex-row px-3 md:px-20 space-x-0 md:space-x-5 mt-5 md:mt-0 text-xl font-bold  ">
             
            <div class=" w-full md:w-1/3   mt-5 md:mt-0 backdrop-blur-sm bg-teal/30 rounded-md  ">

             <div className="text-center  bg-gradient-to-r from-cyan-600 via-green-500 to-red-500 text-transparent bg-clip-text"> UP-GRADATION OF COURSES</div>
             <img src={rocket} alt="" width='100' className="m-auto" />

               </div>
               
               <div class=" w-full md:w-1/3   mt-5 md:mt-0 backdrop-blur-sm bg-teal/30 rounded-md  ">
              <div className="text-center bg-gradient-to-r from-cyan-600 via-green-500 to-red-500 text-transparent bg-clip-text">100% PRACTICAL LEARNING</div>
              <img src={php} alt="" width='100' className="m-auto" />

               </div>

               <div class=" w-full md:w-1/3   mt-5 md:mt-0 backdrop-blur-sm bg-teal/30 rounded-md  ">
              <div className="text-center bg-gradient-to-r from-cyan-600 via-green-500 to-red-500 text-transparent bg-clip-text">ONE TO ONE MENTORSHIP</div>
              <img src={meeting} alt="" width='100' className="m-auto" />
               </div>
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
