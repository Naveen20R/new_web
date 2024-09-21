'use client'
import React from 'react'
import Link from 'next/link';
import { Breadcrumb } from 'rsuite';
import AngleRightIcon from '@rsuite/icons/legacy/AngleRight';
import ImageGallery from './ImageGallery';
import './CategoryStyle.css'

const text = 'உயிர்ச்சத்து குறைவால் ஏற்படும் நோய்கள்.? உயிர்ச்சத்து அதிகரிக்க உணவு முறைகள்...!'
const image = [10, 33, 100, 1015, 51, 1031]

const ViewCategory = () => {
  return (
    <>
      <nav>
        <Breadcrumb separator={<AngleRightIcon />}>
          <Breadcrumb.Item as={Link} href="/">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item as={Link} href="/components/overview">
            ஆன்மீகம்
          </Breadcrumb.Item>
          <Breadcrumb.Item active> ஆன்மீகச் செய்திகள்</Breadcrumb.Item>
        </Breadcrumb>
      </nav>
      <div className='border- border-warning my-4'>
        <ImageGallery />
      </div>

      <div className=' row gap-3'>
        {image.map((image, idx) => (
          <div className='d-flex flex-column gap-2 col-5 rounded px-0' key={idx} style={{ background: 'var(--tg-gray-three)' }}>
            <img src={`https://picsum.photos/id/${image}/300/200`} alt='img' style={{ width: '100%', height: '200px' }}
              className='rounded-top'
            />
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
        ))}

      </div>

    </>

  )
}

export default ViewCategory