import React from 'react'

const CategoryHeader = () => {
    return (
        <div className='border border-start-0 w-100 d-flex align-items-center bg-white my-2 justify-content-between ps-3 py-1 position-relative'>
            <div className='position-absolute start-0 h-100' style={{ width: '4px', background: 'rgb(237 94 36)' }}></div>
            <span className='fw-bold fs-6 py-1 text-danger'>
                ஆன்மீகம்
            </span>
            <a href='' className='d-flex gap-1 align-items-center px-3 py-1' style={{ fontSize: '12px' }}>
                <span className='fw-semibold text-uppercase' style={{ letterSpacing: '.8px' }}>
                    View all
                </span>
                <i class="fa-solid fa-arrow-up" style={{ rotate: '45deg' }}></i>
            </a>
        </div>
    )
}

export default CategoryHeader