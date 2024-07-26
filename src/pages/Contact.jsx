import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useFormik } from 'formik'
import * as Yup from 'yup';

function Contact() {

  const formik = useFormik({
    initialValues:{
      name:'',
      email:'',
      subject:'',
      telephone:'',
      message:''

    },
    validationSchema: Yup.object({
      name: Yup.string().max(15, "Must be 15 characters or less").required('Name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      subject: Yup.string().required('subject is required'),
      telephone: Yup.number().positive().integer().required('Must be a number').max(10),
      message: Yup.string().required('Enter the message')
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  })
  console.log(formik.touched)

  return (
    <div className='flex flex-col items-center min-h-screen bg-blue-100 p-6'>
    <div className='w-full max-w-8xl bg-white shadow-md rounded-lg p-8 mb-8'>
      <h2 className='text-2xl font-bold mb-6 ml-20'>Contact Us</h2>
      <div className='flex flex-col lg:flex-row lg:justify-between mb-8'>
        <div className='lg:w-1/2 lg:pr-4 mb-8 lg:mb-0'>
          <h3 className='text-xl font-semibold'>Find Us at:</h3>
          <p className='mt-2'><strong>Address</strong><br/><FontAwesomeIcon className='mr-3' icon={faLocationDot}/>Milimani, Kisumu Kenya.</p>
          <p className='mt-2'><strong>Phone</strong><br/><FontAwesomeIcon className='mr-3' icon={faPhone}/>+254 798 549508</p>
          <p className='mt-2'><strong>WhatsApp</strong><br/><FontAwesomeIcon className='pr-3'icon={faPhone}/>+254 748 605996</p>
          <p className='mt-2'><strong>Email</strong><br/><FontAwesomeIcon className='pr-3' icon={faEnvelope}/>berylkiche@gmail.com</p>
        </div>
        <form className='lg:w-3/4 lg:pl-4 flex flex-col' onSubmit={formik.handleSubmit}>
          <h3 className='text-xl font-semibold mb-4'>Send us a message</h3>
          <div className='mb-4'>
            <input className='w-full p-4 bg-blue-00 rounded-md border border-blue-300 focus:outline-none focus:border-blue-500'
            type='text'
            name='name'
            placeholder='Enter your Full Name'
            onChange={formik.handleChange}
            value={formik.values.name}
            /> 
            <p className='text-red-500'>{formik.touched.name && formik.errors.name ? <p>{ formik.errors.name}</p> : null}</p>
          </div>
          <div className='mb-4'>
            <input className='w-full p-4 bg-blue-00 rounded-md border border-blue-300 focus:outline-none focus:border-blue-500'
            type='email'
            name='email'
            placeholder='Enter your Email'
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            />
            <p className='text-red-500'>{formik.touched.email && formik.errors.email ? <p>{ formik.errors.email}</p> : null}</p>
          </div>
          <div className='mb-4'>
            <input className='w-full p-4 bg-blue-00 rounded-md border border-blue-300 focus:outline-none focus:border-blue-500'
            type='text'
            name='subject'
            placeholder='Enter Subject'
            onChange={formik.handleChange}
            value={formik.values.subject}
            onBlur={formik.handleBlur}
            />
            <p className='text-red-500'>{formik.touched.subject && formik.errors.subject ? <p>{ formik.errors.subject}</p> : null}</p>
          </div>
          <div className='mb-4'>
            <input className='w-full p-4 bg-blue-00 rounded-md border border-blue-300 focus:outline-none focus:border-blue-500'
            type='tel'
            name='telephone'
            placeholder='Enter Phone Number'
            onChange={formik.handleChange}
            value={formik.values.telephone}
            onBlur={formik.handleBlur}
            />
            <p className='text-red-500'>{formik.touched.telephone && formik.errors.telephone ? <p>{ formik.errors.telephone}</p> : null}</p>
          </div>
          <div className='mb-4'>
            <textarea className='w-full p-4 bg-blue-00 rounded-md border border-blue-300 focus:outline-none focus:border-blue-500'
            placeholder='Enter Message'
            name='message'
             rows='4'
            onChange={formik.handleChange}
            value={formik.values.message}
            onBlur={formik.handleBlur}
            />
            <p className='text-red-500'>{formik.touched.message && formik.errors.message ? <p>{ formik.errors.message}</p> : null}</p>
          </div>
          <div className='text-center'>
            <button className='w-full p-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:g-blue-700'
            type='submit'
            >
              Send Message
              </button>
          </div>
        </form>
      </div>
    </div>
    
  </div>      
  
  )
}

export default Contact

