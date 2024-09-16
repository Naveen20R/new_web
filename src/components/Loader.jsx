import React from 'react';
import '../assets/css/loderStyle.css'; // Import your CSS file for styling
import { IMAGE_BASE_URL } from '@/config';

const Loader = () => (
    <div className="container">
        <div className="row">
            <div className="col">
                <div className='loader-container'>
                    <img src='/assets/loading.gif' alt='Loading...' className='loader-image' />
                </div>
            </div>
        </div>
    </div>
);

export default Loader;
