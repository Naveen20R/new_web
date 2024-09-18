'use client';
import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faPhone, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { IMAGE_BASE_URL, DEFAULT_POST } from '../config/index';
import { fetchSelectCategory } from '../actions/categoryAction';
import { useDispatch, useSelector } from 'react-redux';
import { AuthContext } from '../provider/AuthContext';
import { useRouter } from 'next/navigation';
import axios from '../config';
import Link from 'next/link';

const HomeBlog = ({ title }) => {
  const dispatch = useDispatch();
  const context = useContext(AuthContext);
  const { user } = context;
  const { homePosts } = useSelector((state) => state.posts);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const { setting } = useSelector((state) => state.setting);
  const router = useRouter();
  const [clickedBlogArticleIconId, setClickedBlogArticleIconId] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);

        // Find the relevant post category from homePosts
        const response = homePosts.find((post) => post.category === title);
        if (response) {
          setPosts(response.posts);
          console.log('Homeblog-response',response.posts);
          
        }

        // Fetch user likes if user is logged in
        if (user) {
          const likesResponse = await axios.get(`/api/user/getLikesByUser?id=${user.id}`);
          setClickedBlogArticleIconId(likesResponse.data.likes);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors as needed (e.g., set error state)
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [title]);

  const handleViewClick = (name) => {
    dispatch(fetchSelectCategory(name));
  };

  const handleBlogArticleHeartClick = (linkId) => {
    if (!user) router.push('/login');
    else {
      const fetchLikes = async () => {
        const response = await axios.post('/api/user/updateLikes', {
          userId: user.id,
          postId: linkId,
        });
      };
      fetchLikes();
    }
    if (clickedBlogArticleIconId.includes(linkId)) {
      setClickedBlogArticleIconId(clickedBlogArticleIconId.filter((id) => id !== linkId));
    } else {
      setClickedBlogArticleIconId([...clickedBlogArticleIconId, linkId]);
    }
  };

  const handleFacebookShare = (slug, title, img, subTitle, type) => {
    if (typeof window !== 'undefined') {
      const imgUrl = `https://tnreaders.in/images/post/${type === 'news' ? 'news-detail' : 'article-detail'}/${img}`;
      const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.origin + (type === 'news' ? '/news-detail/' : '/article-detail/') + slug)}&quote=${encodeURIComponent(
        title
      )}`;
      window.open(shareUrl, '_blank');
    }
  };

  const handleTwitterShare = (slug, title, img, subTitle, type) => {
    if (typeof window !== 'undefined') {
      const imgUrl = `https://tnreaders.in/images/post/${type === 'news' ? 'news-detail' : 'article-detail'}/${img}`;
      const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.origin + (type === 'news' ? '/news-detail/' : '/article-detail/') + slug)}&text=${encodeURIComponent(
        title
      )}&description=${encodeURIComponent(subTitle)}`;
      window.open(shareUrl, '_blank');
    }
  };

  const handleWhatsAppShare = (slug, title, img, subTitle, type) => {
    if (typeof window !== 'undefined') {
      const shareUrl = `https://wa.me/?text=${encodeURIComponent(
        `${title}\n${subTitle}\n${window.location.origin}/${type === 'news' ? 'news-detail' : 'article-detail'}/${slug}\n`
      )}`;
      window.open(shareUrl, '_blank');
    }
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);

    // Format the date to '17 Sep 2024'
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <>
      {posts.length ? (
        <div className='spotlight-post-item-wrap'>
          <div className='section-title-wrap-three mb-3'>
            <div className='section-title-three'>
              <h6 className='title'>
                {posts[0].category.name}
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
              <Link
                href={`/${posts[0].category_type === 'news' ? 'news' : 'article'}/${posts[0].category.data_query}`}
                className='link-btn'
                onClick={() => handleViewClick('spotlight')}
              >
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
          {[...Array(Math.ceil(posts.length / 1))].map((_, index) => (
            <div key={`section-${index}`}>
              {posts.slice(index * 1, index * 1 + 1 < posts.length ? index * 1 + 1 : posts.length).map((post) => (
                <div className='justify-content-between row my-3' key={'post' + post.id} style={{ borderBottom: '1px solid #e4e4e4' }}>
                  {/* <div className='spotlight-post big-post'> */}
                  {/* <div className='spotlight-post-thumb'> */}
                  <div className='col-12 col-md-4 mb-3'>
                    <Link href={`/${post.category_type === 'news' ? 'news-detail' : 'article-detail'}/${post.seo_slug}`} >
                      <img
                        src={
                          post.img
                            ? IMAGE_BASE_URL + 'post/' + (post.category.type2 === 'news' ? 'news-detail' : 'article-detail') + '/' + post.img
                            : IMAGE_BASE_URL + 'post/' + (post.category.type2 === 'news' ? 'news-detail' : 'article-detail') + '/' + DEFAULT_POST
                        }
                        alt={post.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', }}
                        className='rounded'
                      />
                    </Link>
                  </div>
                  <div className='weekly-post-content mb-4 col gap-2' >
                    <div className='d-flex justify-content-between'>
                      <div className='fs-6 d-flex align-items-center gap-2'>
                        <FontAwesomeIcon icon={faCalendar} />
                        {formatDate(post.created_at)}
                      </div>
                      <div className="d-flex flex-row flex-wrap align-items-center gap-2">
                        <a onClick={() => handleWhatsAppShare(post.seo_slug, post.title, post.img, post.sub_title, post.category.type2)}
                          className='no-underline'>
                          <span className='phone-icon rounded-circle'>
                            <i className="fa-brands fa-whatsapp fs-4"></i>
                          </span>
                        </a>
                        <a onClick={() => handleFacebookShare(post.seo_slug, post.title, post.img, post.sub_title, post.category.type2)}
                          className='no-underline'>
                          <span className='facebook-icon'>
                            <i className="fa-brands fa-facebook-f fs-6"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                    <p className='text-decoration-none fs-6 post-title' style={{width:'80%'}}>
                      <Link href={`/${post.category_type === 'news' ? 'news-detail' : 'article-detail'}/${post.seo_slug}`}>
                      {/* {post.title.length > 50 ? (post.title.slice(0, 50) + '...') : (post.title)} */}
                      {post.title}
                      </Link>
                    </p>

                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='read-more-btn col-90'>
                        <Link href={`/${post.category_type === 'news' ? 'news-detail' : 'article-detail'}/${post.seo_slug}`} className='homeblog-link-btn'>
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
                </div>
              ))}
            </div>
          ))}
          <div className='view-all-btn my-2 d-flex justify-content-center'>
            <Link href={`/${posts[0].category_type === 'news' ? 'news' : 'article'}/${posts[0].category.data_query}`} className='link-btn'>
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
      ) : (
        ''
      )}
    </>
  );
};

export default HomeBlog;
