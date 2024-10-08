'use client';

import React, { useState } from 'react';
import '@/assets/css/navstyle.css';

function HeaderDropdown({data}) {
  let [showDrop, setShowDrop] = useState(false);

  return (
    <>
      <div onClick={() => { setShowDrop(!showDrop) }} className="d-flex justify-content-between drop-head align-itsm-center">
        <a href='' className="drop-links">
          {data.title}
        </a>
        {
          showDrop ? <i className="fa-solid fa-angle-up my-auto"></i> : <i className="fa-solid fa-angle-down my-auto"></i>
        }
      </div>
      {
        showDrop && (
          <div className="">
            <a href="" className='header-link'>{data.dropDesc}</a>
          </div>
        )
      }

    </>
  )
}

export default HeaderDropdown