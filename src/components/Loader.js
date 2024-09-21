import React from 'react';
import { IMAGE_BASE_URL } from '@/config';
// import loading from '@/assets/loading.gif'

const Loader = () => (
  <div className='loader-container'>
    <img src='/assets/loading.gif' alt='Loading...' className='loader-image' />
  </div>
);

export default Loader;
