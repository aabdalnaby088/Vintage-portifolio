
import React from 'react'

export default function ShowCase() {
  return (
    <>

    <div className='flex justify-center items-center w-[90%] mx-auto max-md:flex-col-reverse'>

        <div className='text-area text-[100px] text-stroke max-sm:text-center max-md:text-[46px] leading-[1.1] '>
            <h2>Come On </h2>
            <h2>explore my </h2>
            <h2>creative showcase</h2>    
        </div>

        <div className='image-area  flex justify-center'>

            <img className='w-[80%]'  src="/public/assets/manShowingProjects.png" alt="Man Showing Projects" />

        </div>



    </div>


    
    </>

  )
}
