import React,{useEffect} from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from "react-redux";
import ArticalHeading from './ArticalHeading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "@/assets/css/articalStyle.css";
import axios from '../../config';

const Artical = () => {
  const dispatch = useDispatch();
  const { categories, selectCategory } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    const fetchTrendingPosts = async () => {
      try {
        const resSpotlight = await axios.get(`/api/user/spotlight`);
        console.log(resSpotlight.data);
        

        // if (user) {
        //   const likesResponse = await axios.get(`/api/user/getLikesByUser`, {
        //     params: { id: user.id },
        //   });
        //   setClickedBlogArticleIconId(likesResponse.data.likes);
        // }

        // setNoPost(1);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchTrendingPosts();
  }, []);


  return (
    <div className="artical" style={{ borderBottom: '1px solid rgb(228, 228, 228)', padding: '20px 0px' }}>
      <div className="card border-0">
        <div className="row">
          <div className="col-md-4">
            <div className="artical-image">
              <img
                src="https://tnreaders.in/images/post/news-detail/7d7702b1-54d2-40.jpg"
                className="card-img img-fluid w-100 h-100"
                alt="Article"
              />
            </div>
          </div>

          <div className="col-md-8">
            <div className="p-1">
              <ArticalHeading title={''} />
              <div className="d-flex my-3 flex-wrap justify-content-start align-items-center gap-4">
                <div className="d-flex flex-row flex-wrap align-items-center justify-content-start w-100 gap-3">
                  <div className="current-date">
                    {/* <FontAwesomeIcon icon={faCalendar} /> */}
                    <p className='my-auto posted-date-key'>Posted : <span className='posted-date'>11,06,2002</span></p>
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
              </div>
              <Link href="/" className='post-title'>
                உயிர்ச்சத்து குறைவால் ஏற்படும் நோய்கள்.? உயிர்ச்சத்து அதிகரிக்க உணவு முறைகள்...!
              </Link>
              <div className="d-flex flex-wrap gap-2 my-3">
                <Link href="" className='read-more-btn-style'>Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Artical;
