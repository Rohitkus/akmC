import React from 'react'


function Coursecard({title,img,subTitle,rs}) {
  return (
    <div>
      <div class="max-w-sm rounded-sm overflow-hidden shadow-lg shadow-black hover:scale-105 transition duration-700 ease-in-out ">
  <img class="w-full" src={img} alt="Image"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{title}</div>
    <p class="text-gray-700 text-base">
     {subTitle}
    </p>
  </div>
  <div class="px-6 pt-1 pb-2">
    <span class="inline-block bg-teal-100 rounded-full px-3 py-2 text-sm font-semibold text-teal-800 mr-2 mb-2">*<strong>{rs}</strong> rs/M Only</span>
   
  </div>
</div>
    </div>
  )
}

export default Coursecard
