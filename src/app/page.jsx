"use client"
import React, { useEffect } from 'react';
import Header from "@/components/header/Header";
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import MainMenuLink from "@/components/mainmenu/MainMenuLink";
import MenuLayout from "@/layouts/MenuLayout";
import Link from 'next/link';
import '@/assets/css/articalStyle.css'
import axios from '../config';
// import { useDispatch, useSelector } from 'react-redux';
import '@/assets/css/articalStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faPhone, faHeart } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  // const { categories, selectCategory } = useSelector((state) => state.categories);  // all datas


  // console.log(categories);


  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        const res = await axios.get('/api/user/homePagecategories');
        console.log(res);

        // setMetadata(res.data);
      } catch (error) {
        console.error('Error fetching metadata:', error);
      } finally {
        // setMetadataLoading(false);
      }
    };
    fetchMetadata();
  }, []);

  return (
    <>
      <Header />
      <MenuLayout />
      <div className="container my-3">
        <div className="row">
          <div className="col-12 col-md-8" >
            <div className='spotlight-post-item-wrap'>
              <div className='section-title-wrap-three mb-20'>
                <div className='section-title-three'>
                  <h6 className='title'>
                    தலைப்புச் செய்திகள்
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
              {/* --------- */}
              <div className="row my-3" style={{ border: '2px solid green' }}>
                <div className="col-12" style={{ border: '2px solid orange' }}>
                  <div className="spotlight-post big-post">
                    <div className="spotlight-post-thumb">
                      <img className='w-100 h-100' src="https://tnreaders.in/images/post/news-detail/7d7702b1-54d2-40.jpg" alt="images" />
                    </div>
                  </div>
                  <div className="d-flex my-3 justify-content-start align-items-center gap-4">
                    <a href='' className='post-tag'>தலைப்புச்செய்திகள்</a>
                    <div className="current-date">
                      <FontAwesomeIcon icon={faCalendar} />
                      <p className='my-auto'>11/06/2002</p>
                    </div>
                    <div className="d-flex justify-content-start flew-row flex-wrap align-items-center gap-3">
                      <a href='' className='text-white'>
                        <span className='phone-icon  rounded-circle'>
                          <i class="fa-solid fa-phone"></i>
                        </span>
                      </a>
                      <a href='' className='text-white'>
                        <span className='facebook-icon  rounded-circle'>
                          <i class="fa-brands fa-facebook-f"></i>
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
              {/* ----------- */}
            </div>
          </div>
          <div className="col-12 col-md-4" style={{ border: '2px solid red' }}>

          </div>
        </div>
      </div>

    </>
  );
}
