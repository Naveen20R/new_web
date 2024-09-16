import React from 'react';
import Link from 'next/link';
import ArticalHeading from './ArticalHeading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "@/assets/css/articalStyle.css";

const Artical = () => {
  return (
    <div className="row my-3" >
      <div className="col-12">
        <div className="spotlight-post big-post">
          <div className="spotlight-post-thumb">
            <img className='w-100 h-100' src="https://tnreaders.in/images/post/news-detail/7d7702b1-54d2-40.jpg" alt="images" />
          </div>
        </div>
        <div className="d-flex my-3 flex-wrap justify-content-start align-items-center gap-4">
          <a href='' className='post-tag'>தலைப்புச்செய்திகள்</a>
          <div className="current-date">
            <FontAwesomeIcon icon={faCalendar} />
            <p className='my-auto'>11/06/2002</p>
          </div>
          <div className="d-flex justify-content-start flew-row flex-wrap align-items-center gap-3">
            <a href='' className='text-white'>
              <span className='phone-icon  rounded-circle'>
                <i className="fa-solid fa-phone"></i>
              </span>
            </a>
            <a href='' className='text-white'>
              <span className='facebook-icon  rounded-circle'>
                <i className="fa-brands fa-facebook-f"></i>
              </span>
            </a>
          </div>
        </div>
        <h2>
          <Link href="" className='post-title'>உயிர்ச்சத்து குறைவால் ஏற்படும் நோய்கள்.? உயிர்ச்சத்து அதிகரிக்க உணவு முறைகள்...!</Link>
        </h2>
        <p className='post-desc'>உயிர்ச்சத்து(வைட்டமின்) குறைபாட்டால் ஏற்படும் நோய்களையும், அதை தீர்க்கும் உணவு முறைகளும் பற்றிய தொகுப்பு....</p>
        <div className='view-all-btn_1'>
          <Link href={`/`} className='homeblog-link-btn_1'>
            Read More
            <span className='svg-icon'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10' fill='none'>
                <path d='M1.07692 10L0 8.92308L7.38462 1.53846H0.769231V0H10V9.23077H8.46154V2.61538L1.07692 10Z' fill='currentColor' />
                <path d='M1.07692 10L0 8.92308L7.38462 1.53846H0.769231V0H10V9.23077H8.46154V2.61538L1.07692 10Z' fill='currentColor' />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
    )

}

export default Artical;
