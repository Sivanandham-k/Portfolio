import { educationData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Education = () => {
  return (
    <div id='education' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg mt-7'>
        Qualification
      </h4>
      <h2 className='text-center text-5xl'>
        Education
      </h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>
        Throughout my acadamic journey, I developed strong foundation in web development, complemented by hands on projects and real world-applications.
      </p>

      <div className='grid grid-cols-auto gap-6 my-10'>
        {educationData.map(({icon, title, year, description}, index)=>(
          <div key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:-translate-y-1 duration-500 hover:bg-lightHover dark:hover:shadow-white dark:hover:bg-darkHover'>
            <Image alt='' src={icon} className='w-14' />
            <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
            <h3 className='text-lg my-4 text-gray-700 dark:text-white/80'>{year}</h3>
            <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education
