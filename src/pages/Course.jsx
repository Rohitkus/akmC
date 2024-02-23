import React from 'react'


import mean from '../assets/mean.jpg'
import mern from '../assets/mern.jpg'
import dataa from '../assets/dataa.jpg'
import deng from '../assets/deng.jpg'

import ol from '../assets/2.jpg'
import al from '../assets/3.jpg'
import ccc from '../assets/ccc.jpg'
import bcc from '../assets/bcc.jpg'

import dca from '../assets/dcacover.jpg'
import adca from '../assets/adcacover.jpg'
import doap from '../assets/doapcover.jpg'
import pgdca from '../assets/pgdcacover.jpg'
import ac from '../assets/autocad1.jpg'
import tp from '../assets/tprime.jpg'

import Coursecard from './Coursecard'
function Course() {
  return (
    <div>
         <h1>About</h1>
      <div className='mt-9'></div>
      <div className='pr-3 pl-3   md:pl-20 md:pr-20'>
        <h1 className='text-center text-3xl mt-20 mb-10'><strong> - Our Courses -</strong></h1>

        <div className='grid md:grid-cols-4  sm:grid-cols-2 grid-cols-1 gap-6'>
          <Coursecard   title="Mean" img={mean} subTitle="Web Dovelopement Course"   rs="600"   />
          <Coursecard   title="Mern" img={mern} subTitle="Web Dovelopement Course"   rs="600"   />
          <Coursecard   title="Data Analyst" img={dataa} subTitle="Data Analyst"    rs="600"  />
          <Coursecard   title="Data Engineer" img={deng} subTitle="Data Engineer"   rs="600"   />
           


          <Coursecard   title="O'Level" img={ol} subTitle="NIELIT's Olaval"   rs="500"   />
          <Coursecard   title="A'Level" img={al} subTitle="NIELIT's Alaval"    rs="500"  />
          <Coursecard   title="CCC" img={ccc} subTitle="Course On Computer Concep"   rs="500"   />
          <Coursecard   title="BCC" img={bcc} subTitle="Basic Computer Course"   rs="500"   />

          <Coursecard   title="DOAP" img={doap} subTitle="Diploma In Office Automation And Publicing"    rs="500"  />
          <Coursecard   title="DCA" img={dca} subTitle="Diploma in computer Application"    rs="500"  />
          <Coursecard   title="ADCA" img={adca} subTitle="Advance Diploma In Computer Application"     rs="500" />
          <Coursecard   title="PGDCA" img={pgdca} subTitle="Post Graduate Diploma In Computer Application"   rs="500"   />


          <Coursecard   title="AutoCad  2D And 3D" img={ac} subTitle="kgjaksjdk"    rs="600"  />
          <Coursecard   title="Tally" img={tp} subTitle="kgjaksjdk"   rs="600"   />




        </div>

      </div>
    </div>
  )
}

export default Course
