import React from 'react'
import Header from '../components/Header'
import image from '../assets/pics/doc.png'
import docto from '../assets/pics/nurse.jpg'
// import img from '../assets/pics/nosee.png'

export const About = () => {
  return (
    <section>
      <Header/>
    <div className=' bg-bl400 h-[700px] w-full'>
        <h2 className=' text-4xl text-center mt-10'>Our doctors </h2>

        <div className='flex justify-center gap-6 mt-10  '>

        <div className=' bg-gray-200 flex h-[400px] rounded-2xl '>
          <div><img className=' m-auto h-[300px]' src={docto} alt="" />
          <h1 className='text-center text-2xl'>Dr. Junny</h1>
          <p className='text-blue-500 text-center'>Hematology</p>
          </div>
        </div>

        <div className='bg-gray-200   flex  h-[400px] rounded-2xl'>
          <div><img className=' m-auto h-[300px]' src={docto} alt="" />
          <h1 className='text-center text-2xl'>Dr. Junny</h1>
          <p className='text-blue-500 text-center'>Hematology</p>
          </div>
        </div>

        <div className='bg-gray-200  flex  h-[400px] rounded-2xl '>
          <div><img className=' m-auto h-[300px]' src={docto} alt="" />
          <h1 className='text-center text-2xl'>Dr. Junny</h1>
          <p className='text-blue-500 text-center'>Hematology</p>
          </div>
        </div>

        <div className='bg-gray-200  flex  h-[400px] rounded-2xl '>
          <div><img className=' m-auto h-[300px]' src={docto} alt="" />
          <h1 className='text-center text-2xl'>Dr. Junny</h1>
          <p className='text-blue-500 text-center'>Hematology</p>
          </div>
        </div>

        </div>

    </div>
    </section>
  )
}
