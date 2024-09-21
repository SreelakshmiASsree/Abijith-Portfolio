import React from 'react'
import work1 from '../../assets/work1.png';
import work2 from '../../assets/work2.png';
import work3 from '../../assets/work3.png';
import work4 from '../../assets/work4.png';
import work5 from '../../assets/work5.png';
import work6 from '../../assets/work6.png';
import work7 from '../../assets/work7.png';
import work8 from '../../assets/work8.png';
import work9 from '../../assets/work9.png';
import work10 from '../../assets/work10.png';
import work11 from '../../assets/work11.png';
import work12 from '../../assets/work12.png';
import rightarrowwhite from '../../assets/rightarrowwhite.png'
import AdminNavbar from './AdminNavbar';

const AllWork = () => {
  return (
    <>
    <AdminNavbar/>
    <div className='flex items-center justify-end mx-5'>   
          <button className='mt-6 py-2 px-4 border border-white rounded-full text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors'>
                <a href="/AddWork">Add Work</a>
                <img src={rightarrowwhite} alt="Right arrow" className='w-6' />
            </button></div>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-24 p-10'>
        
        {/* <form action="">
          
        </form> */}
        <div className='works_img'>
          <img src={work12} className='w-full h-80 object-cover' alt="" />
          <div className='text-content'>
            <p className='text-white py-2'>Body Space Time, Galleria Continua, San Gimignano, Italy</p>
            <p className='text-white'>23 April-11 September 2022</p>
          </div>
        </div>

        <div className='works_img'>
          <img src={work2} className='w-full h-80 object-cover' alt="" />
          <div className='text-content'>
            <p className='text-white py-4'>Body Space Time, Galleria Continua, San Gimignano, Italy</p>
            <p className='text-white'>23 April-11 September 2022</p>
          </div>
        </div>
        
        <div className='works_img'>
          <img src={work3} className='w-full h-80 object-cover' alt="" />
          <div className='text-content'>
            <p className='text-white py-4'>Body Space Time, Galleria Continua, San Gimignano, Italy</p>
            <p className='text-white'>23 April-11 September 2022</p>
          </div>
        </div>

        <div className='works_img'>
          <img src={work4} className='w-full h-80 object-cover' alt="" />
          <div className='text-content'>
            <p className='text-white py-4'>Body Space Time, Galleria Continua, San Gimignano, Italy</p>
            <p className='text-white'>23 April-11 September 2022</p>
          </div>
        </div>

        <div className='works_img'>
          <img src={work5} className='w-full h-80 object-cover' alt="" />
          <div className='text-content'>
            <p className='text-white py-4'>Body Space Time, Galleria Continua, San Gimignano, Italy</p>
            <p className='text-white'>23 April-11 September 2022</p>
          </div>
        </div>

        <div className='works_img'>
          <img src={work6} className='w-full h-80 object-cover' alt="" />
          <div className='text-content'>
            <p className='text-white py-4'>Body Space Time, Galleria Continua, San Gimignano, Italy</p>
            <p className='text-white'>23 April-11 September 2022</p>
          </div>
        </div>

        <div className='works_img'>
          <img src={work9} className='w-full h-80 object-cover' alt="" />
          <div className='text-content'>
            <p className='text-white py-4'>Body Space Time, Galleria Continua, San Gimignano, Italy</p>
            <p className='text-white'>23 April-11 September 2022</p>
          </div>
        </div>

        <div className='works_img'>
          <img src={work7} className='w-full h-80 object-cover' alt="" />
          <div className='text-content'>
            <p className='text-white py-4'>Body Space Time, Galleria Continua, San Gimignano, Italy</p>
            <p className='text-white'>23 April-11 September 2022</p>
          </div>
        </div>

        <div className='works_img'>
          <img src={work10} className='w-full h-80 object-cover' alt="" />
          <div className='text-content'>
            <p className='text-white py-4'>Body Space Time, Galleria Continua, San Gimignano, Italy</p>
            <p className='text-white'>23 April-11 September 2022</p>
          </div>
        </div>

        <div className='works_img'>
          <img src={work11} className='w-full h-80 object-cover' alt="" />
          <div className='text-content'>
            <p className='text-white py-4'>Body Space Time, Galleria Continua, San Gimignano, Italy</p>
            <p className='text-white'>23 April-11 September 2022</p>
          </div>
        </div>

        <div className='works_img'>
          <img src={work11} className='w-full h-80 object-cover' alt="" />
          <div className='text-content'>
            <p className='text-white py-4'>Body Space Time, Galleria Continua, San Gimignano, Italy</p>
            <p className='text-white'>23 April-11 September 2022</p>
          </div>
        </div>
        <div className='works_img'>
          <img src={work11} className='w-full h-80 object-cover' alt="" />
          <div className='text-content'>
            <p className='text-white py-4'>Body Space Time, Galleria Continua, San Gimignano, Italy</p>
            <p className='text-white'>23 April-11 September 2022</p>
          </div>
        </div>
        <div className='works_img'>
          <img src={work11} className='w-full h-80 object-cover' alt="" />
          <div className='text-content'>
            <p className='text-white py-4'>Body Space Time, Galleria Continua, San Gimignano, Italy</p>
            <p className='text-white'>23 April-11 September 2022</p>
          </div>
        </div>
        <div className='works_img'>
          <img src={work11} className='w-full h-80 object-cover' alt="" />
          <div className='text-content'>
            <p className='text-white py-4'>Body Space Time, Galleria Continua, San Gimignano, Italy</p>
            <p className='text-white'>23 April-11 September 2022</p>
          </div>
        </div>
        <div className='works_img'>
          <img src={work11} className='w-full h-80 object-cover' alt="" />
          <div className='text-content'>
            <p className='text-white py-4'>Body Space Time, Galleria Continua, San Gimignano, Italy</p>
            <p className='text-white'>23 April-11 September 2022</p>
          </div>
        </div>

        <div className='works_img'>
          <img src={work11} className='w-full h-80 object-cover' alt="" />
          <div className='text-content'>
            <p className='text-white py-4'>Body Space Time, Galleria Continua, San Gimignano, Italy</p>
            <p className='text-white'>23 April-11 September 2022</p>
          </div>
        </div>
        <div className='works_img'>
          <img src={work11} className='w-full h-80 object-cover' alt="" />
          <div className='text-content'>
            <p className='text-white py-4'>Body Space Time, Galleria Continua, San Gimignano, Italy</p>
            <p className='text-white'>23 April-11 September 2022</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AllWork