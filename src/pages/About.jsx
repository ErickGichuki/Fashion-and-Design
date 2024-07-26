import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShirt, faEye, faGem } from '@fortawesome/free-solid-svg-icons'

function About() {
  return (
    <div className='mx-auto max-w-7xl'> 
      <div className='p-6'>
        <h2 className='text-lg font-bold mb-4 text-center'>About Us</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='flex justify-center items-center'>
          <img src='https://images.unsplash.com/photo-1459792323369-14e51bb68de0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRleHRpbGUlMjBkZXNpZ25zfGVufDB8fDB8fHww' alt='fashion' className='rounded-lg w-full h-auto object-cover'/>
        </div>
        <div className='flex flex-col justify-center'>
          <h3 className='text-lg text-green-700 mb-2'>Who we are</h3>
          <p className='text-sm mb-2'>Bericks Designs is a provider of Custom fashion and design solutions, we combine passion for fashion with technical expertise to deliver innovative and unique designs. Our team of experienced fashion designers and consultants is dedicated to creating bespoke fashion experiences tailored to your style.</p>
          <p className='text-sm mb-2'>Whether you are looking for apparel design, shoe design, textile patterns, or any other design we strive to exceed your expectations with creativity and craftsmanship.</p>
          <p className='text-sm mb-2'>With a focus on elegence and sophistication, we bring your fashion ideas to life, ensuring each piece reflects your personal style and enhances your wardrobe.</p>
          <p className='text-sm'>Visit us to explore the intersection of creativity and style. Let's redefine fashion together!</p>
        </div>
      </div>
      </div>
      <div className='flex flex-col items-center py-6'>
        <div className='flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 justify-center items-center m-8'>
          <div className='bg-blue-100 hover:bg-blue-300 rounded-lg p-10 w-full md:w-1/3 text-center shadow-lg transition duration-300 ease-in-out hover:-translate-y-1'>
            <p>
              <FontAwesomeIcon icon={faShirt} className='w-12 h-12 text-green-800 mb-4'/>
              </p>
            <h2 className='text-2xl font-semibold mb-2'>Mission</h2>
            <p className='text-gray-600'>Our mission is to provide the best designs to our clients.</p>
          </div>
          <div className='bg-red-100 hover:bg-red-300 rounded-lg p-10 w-full md:w-1/3 text-center shadow-lg transition duration-300 ease-in-out hover:-translate-y-1 mt-6 md:mt-0'>
          <p>
              <FontAwesomeIcon icon={faEye} className='w-12 h-12 text-red-500 mb-4'/>
              </p>
          <h2 className='text-2xl font-semibold mb-2'>Vision</h2>
          <p className='text-gray-600'>We aim to become the leading fashion company in Kenya.</p>
          </div>
          <div className='bg-green-200 hover:bg-green-300 rounded-lg p-10 w-full md:w-1/3 text-center shadow-lg transition duration-300 ease-in-out hover:-translate-y-1 mt-6 md:mt-0'>
          <p>
              <FontAwesomeIcon icon={faGem} className='w-12 h-12 text-yellow-500 mb-4'/>
              </p>
          <h2 className='text-2xl font-semibold mb-2'>Value</h2>
          <p className='text-gray-600'>We value integrity, excellence and respect for our clients.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
