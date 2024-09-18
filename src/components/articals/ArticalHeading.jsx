import React from 'react';
import Link from 'next/link';

function ArticalHeading({title}) {
    return (
        <>
            <div className='section-title-wrap-three mb-20'>
                <div className='section-title-three'>
                    <h6 className='title'>
                        {title}
                        <span className='section-title-svg'>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 246 40' fill='none' preserveAspectRatio='none'>
                                <path
                                    d='M10.1448 2.85061C10.6524 1.15867 12.2097 0 13.9761 0H241.624C244.303 0 246.225 2.58294 245.455 5.14939L235.855 37.1494C235.348 38.8413 233.79 40 232.024 40H4.37612C1.69667 40 -0.225117 37.4171 0.544817 34.8506L10.1448 2.85061Z'
                                    fill='currentcolor'
                                />
                            </svg>
                        </span>
                    </h6>
                    <div className='section-title-line-three'></div>
                </div>
                <div className='view-all-btn'>
                    <Link href={`/`} className='link-btn'>
                        View All
                        <span className='svg-icon'>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10' fill='none'>
                                <path d='M1.07692 10L0 8.92308L7.38462 1.53846H0.769231V0H10V9.23077H8.46154V2.61538L1.07692 10Z' fill='currentColor' />
                                <path d='M1.07692 10L0 8.92308L7.38462 1.53846H0.769231V0H10V9.23077H8.46154V2.61538L1.07692 10Z' fill='currentColor' />
                            </svg>
                        </span>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ArticalHeading