import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import '@/assets/css/subHeadingStyle.css';

function BreadCrump01() {
    return (
        <div className="row my-2">
            <div className="col-12">
                <ol className='breadcrumb-list'>
                    <li style={{ border: '2px solid red' }}>
                        <Link href="/">Home</Link>
                        <FontAwesomeIcon className='px-1 my-end' icon={faAngleRight} />
                    </li>
                    <li className='breadcrumb-item' aria-current='page' style={{ border: '2px solid red' }}>
                        செய்திகள்
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default BreadCrump01