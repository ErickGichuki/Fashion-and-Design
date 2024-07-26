import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonDress, faTshirt, faMattressPillow, faShoePrints } from '@fortawesome/free-solid-svg-icons'

function Home() {
  return (
    <div>
      <div className='bg-accent h-100 mx-auto max-w-8xl py-6 px-6 flex flex-col md:flex-row justify-between items-center'>
        <div className='text-white mt-8 md:mr-8'>
          <h1 className='font-bold text-2xl mb-4 text-green-200'>
            Exclusive Fashion, Designs and<br/>Personalized Style consulting
          </h1>
            <p className='text-md mb-6'>
              Discover innovative fashion that brings elegance, sophistication, <br/>and uniqueness to your wandrobe.<br/> Our team is dedicated to making you look your best.
            </p>
            <div className='space-x-4'>
              <button className='text-white font-semibold py-2 px-4 border rounded-lg mb-4 hover:text-blue-800 hover:bg-white'>
                  Talk to us
              </button>
              <button className='bg-white text-blue-800 font-semibold py-2 px-4 rounded-lg mb-8 hover:bg-blue-800 hover:text-white'>
                Visit us
              </button>
            </div>
        </div>
        <div className='mt-8 md:mt-0'>
          <div className='bg-accent rounded flex flex-col justify-center space-y-4 up-down h-80 w-full'>
            <FontAwesomeIcon icon={faPersonDress} className='text-white text-4xl'/>
            <FontAwesomeIcon icon={faTshirt} className='text-white text-4xl'/>
            <FontAwesomeIcon icon={faMattressPillow} className='text-white text-4xl'/>
            <FontAwesomeIcon icon={faShoePrints} className='text-white text-4xl'/>
          </div>
        </div>
      </div>
    <div className='mt-8 mx-auto max-w-2xl'>
      <h2 className='font-semibold text-center mt-4 text-lg'>Areas we design</h2>
      <h2 className='font-bold text-center mt-2 text-blue-700 text-xl mb-4'>Where creativity meets style: discover and design with us</h2>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-4'>
      <div className='bg-white rounded-lg shadow-md p-4 hover:translate-y-px'>
        <h3 className='font-semibold text-black text-xl mb-2'>Apparel Design</h3>
        <img src='https://plus.unsplash.com/premium_photo-1673356302101-e69975f7109a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFwcGFyZWwlMjBkZXNpZ25zfGVufDB8fDB8fHww' className='rounded-lg w-full h-40 mt-4 object-cover'/>
        <p>Crafting unique and trendy clothing pieces.</p>
      </div>
      <div className='bg-white rounded-lg shadow-md p-4'>
        <h3 className='font-semibold text-black text-xl mb-2'>Shoe Design</h3>
        <img src='https://media.istockphoto.com/id/187310279/photo/brown-leather-shoe.webp?b=1&s=170667a&w=0&k=20&c=fkM_vidYJmDy-l7554dGi1gJGtG_0hM2-sRbW5vRW1g=' alt='shoes' className='rounded-lg w-full h-40 mt-4'/>
        <p>Designing stylish and comfortable footwear for every occasion.</p>
      </div>
      <div className='bg-white rounded-lg shadow-md p-4'>
        <h3 className='font-semibold text-black text-xl mb-2'>Textile Design</h3>
        <img src='https://images.unsplash.com/photo-1531877025030-f7696a50770f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGV4dGlsZSUyMGRlc2lnbnN8ZW58MHx8MHx8fDA%3D' className='mt-4 h-40 rounded-lg w-full object-cover'/>
        <p>Developing innovative fabric patterns and textures.</p>
      </div>
      <div className='bg-white rounded-lg shadow-md p-4 mb-4'>
        <h3 className='font-semibold text-black text-xl mb-4'>Fashion Illustration</h3>
        <img src='https://images.unsplash.com/photo-1524292332709-b33366a7f165?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRleHRpbGUlMjBkZXNpZ25zfGVufDB8fDB8fHww' alt='illustration' className='mt-4 h-40 rounded-lg w-full object-cover'/>
        <p>Bringing designs to life through sketches and digital art.</p>
      </div>
    </div>
    </div>
    </div>
    
  )
}

export default Home
