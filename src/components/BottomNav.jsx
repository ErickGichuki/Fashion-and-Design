import React from 'react'

function BottomNav() {
  return (
    <footer className='bg-accent text-white py-8'>
      <div className='container mx-auto px-6'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            <div className='mb-4'>
                <h3 className='text-xl font-bold mb-2'>Fountain Designs</h3>
                <p className='text-md'>We are dedicated to creating innovative fashion pieces that reflect elegance and style. We aim to redifine fashion through creativity and craftsmanship.</p>
            </div>
            <div className='mb-4'>
                <h3 className='text-lg font-bold mb-2'>Explore</h3>
                <ul className='space-y-2 '>
                    <li><a href='/'className='bottom-link text-sm'>Home</a></li>
                    <li><a href='/about'className='bottom-link text-sm'>About</a></li>
                    <li><a href='/services'className='bottom-link text-sm'>Services</a></li>
                    <li><a href='/projects'className='bottom-link text-sm'>Projects</a></li>
                    <li><a href='/contact'className='bottom-link text-sm'>Contact Us</a></li>
                </ul>
            </div>
            <div className='mb-4'>
                <h3 className='text-lg font-bold mb-2'>Solutions</h3>
                <ul className='space-y-2'>
                    <li><a href='#' className='bottom-link text-sm'>Apparel design</a></li>
                    <li><a href='#' className='bottom-link text-sm'>Shoe design</a></li>
                    <li><a href='#' className='bottom-link text-sm'>Textile design</a></li>
                    <li><a href='#' className='bottom-link text-sm'>Fashion Illustration</a></li>
                </ul>
            </div>
            <div className='mb-4'>
                <h3 className='text-lg font-bold mb-2'>Subscribe</h3>
                <p className='text-sm mb-2'>Receive our latest news, articles, and resources directly in your inbox weekly.</p>
                <form className='flex'>
                    <input type='email' className='py-2 px-4 rounded-md m-1 focus:outline-none w-40 text-accent' placeholder='Enter your email' required/>
                    <button type='submit' className='bg-green-700 text-white px-2 px-4 rounded-md hover:bg-green-600 hover:text-black focus:outline-none'>Subscribe</button>
                </form>
            </div>
        </div>
        <div className='border-t border-gray-700 mt-8 pt-4 text-sm text-center'>
            <p>&copy; {new Date().getFullYear()} Fountain Designs. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default BottomNav
