import React, { useEffect } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from "react-redux";
import ArticalHeading from './ArticalHeading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "@/assets/css/articalStyle.css";

const Artical = () => {
  const dispatch = useDispatch();

  const { categories, selectCategory } = useSelector(
    (state) => state.categories
  );


  return (
    <div className="artical py-3">
      <div className="artical-card border-0">
        <div className="row g-0"> {/* Added g-0 to remove gutter space */}
          <div className="col-md-4 col-12">
            <div className="artical-image">
              <img
                src="https://img-cdn.thepublive.com/fit-in/360x0/filters:format(webp)/tamil-ie/media/media_files/uploads/2020/10/Curry-leaves-kolambu-resized.jpg"
                className="card-img img-fluid w-100 h-100"
                alt="Article" />
              <h2 className='tag'>ஆரோக்கிய உணவு</h2>
            </div>
          </div>
          <div className="col-md-8 col-12 ">
            <div className="mx-3">
              <div className="d-flex flex-wrap justify-content-start align-items-center gap-4 mb-2">
                <div className="d-flex flex-row flex-wrap align-items-center justify-content-start w-100 gap-3">
                  <div className="current-date">
                    <p className='my-auto posted-date-key'>Posted : <span className='posted-date'>11-06-2002</span></p>
                  </div>
                  <div className="d-flex flex-row flex-wrap align-items-center gap-2">
                    <Link href="#" className='no-underline'>
                      <span className='phone-icon rounded-circle'>
                        <i className="fa-brands fa-whatsapp"></i>
                      </span>
                    </Link>
                    <Link href="#" className='no-underline'>
                      <span className='facebook-icon'>
                        <i className="fa-brands fa-facebook-f"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <Link href="/" className='post-title'>
              {"உணவு தயாரிப்பில் நல்லெண்ணெய் அதிகம் பயன்படுத்துவதால் கிடைக்கும் நன்மைகள் உணவு தயாரிப்பில் நல்லெண்ணெய் அதிகம் பயன்படுத்துவதால்.".slice(0,100)}...
              </Link>
              <div className="d-flex flex-wrap gap-2 mt-3">
                <Link href="" className='read-more-btn-style'>Read More <i class="fa-solid fa-arrow-right"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )}
export default Artical;

{/* <div className="d-flex my-3 flex-wrap justify-content-start align-items-center gap-4">
<div className="d-flex flex-row flex-wrap align-items-center justify-content-start w-100 gap-3">
  <div className="current-date">
    <p className='my-auto posted-date-key'>Posted : <span className='posted-date'>
      </span></p>
  </div>
  <div className="d-flex flex-row flex-wrap align-items-center gap-2">
    <Link href="#" className='no-underline'>
      <span className='phone-icon rounded-circle'>
        <i className="fa-brands fa-whatsapp fs-4"></i>
      </span>
    </Link>
    <Link href="#" className='no-underline'>
      <span className='facebook-icon'>
        <i className="fa-brands fa-facebook-f fs-6"></i>
      </span>
    </Link>
  </div>
</div>
</div> */}
