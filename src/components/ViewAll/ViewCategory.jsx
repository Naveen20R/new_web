'use client'
import React from 'react';
import ImageGallery from './ImageGallery';
import '@/assets/css/CategoryStyle.css'
import ViewAllPagination from './ViewAllPagination';
import ViewAllBreadcrumb from './ViewAllBreadcrumb';

const text = 'உயிர்ச்சத்து குறைவால் ஏற்படும் நோய்கள்.? உயிர்ச்சத்து அதிகரிக்க உணவு முறைகள்...!'
const image = [10, 33, 100, 1015, 51, 1031]

const ViewCategory = () => {
  return (
    <>
      <div className="row">
        <div className="col py-0">
          <ViewAllBreadcrumb />
        </div>
      </div>

      <div className='my-3'>
        <ImageGallery />
      </div>

      <div className='row row-cols-1 row-cols-md-2 px-2'>
        {image.map((image, idx) => (
          <div className="col-12 col-md-6 px-2 ">
            <div className='position-relative mb-3 sigle-card' key={idx} >
              <div className="card-img ">
                <img src={`https://picsum.photos/id/${image}/300/200`} alt='img'
                  className=' card-img-child w-100 img-fluid h-100'
                  height={200}
                  />
                <small style={{ textAlign: 'center', fontSize: '12px' }} className="position-absolute fw-semibold top-0 start-0 text-white shadow image-badge rounded px-2 py-1 mx-1 mt-1">ஆரோக்கிய உணவு</small>
              </div>
              <div className='px-3 py-2 d-flex flex-column gap-3'>
                <a href='' className='nav-links'>
                  {text}
                </a>
                <div className='w-100 d-flex justify-content-between'>
                  <small className='fw-semibold '>
                    Aarumugam
                  </small>
                  <small className=' ' style={{ fontSize: '12px' }}>
                    20/09/2024
                  </small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ViewAllPagination />
    </>
  )
}

export default ViewCategory