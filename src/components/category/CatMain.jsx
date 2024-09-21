import React, { useEffect, useRef, useState } from 'react';
import Artical from '../articals/Artical';
import "@/assets/css/catMainstyle.css";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Link from 'next/link';

function CatMain() {
    const splideRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = 2; // Update this based on the number of slides

    useEffect(() => {
        if (splideRef.current) {
            splideRef.current.splide.on('move', (newIndex) => {
                setCurrentIndex(newIndex);
            });
        }
    }, []);

    const handlePrev = () => {
        if (splideRef.current) {
            splideRef.current.splide.go('-');
        }
    };

    const handleNext = () => {
        if (splideRef.current) {
            splideRef.current.splide.go('+');
        }
    };

const image = [10, 33, 100, 1015, 51, 1031]


    return (
        <>
            <div className="row " style={{ borderBottom: '1px solid rgba(0, 101, 178, 0.263)' }}>
                <div className="col-12 p-0 col-lg-8 main-category-2" id="main-category-2">
                    <Artical />
                </div>
                <div className="col-12 col-lg-4 px-0 px-md-2">
                    <div className="position-relative mt-3 mt-md-0">
                        <Splide
                            options={{
                                type: 'slide', // Change to 'slide' for non-looping
                                perPage: 1,
                                pagination: false, // Disable pagination circles
                                arrows: false, // Disable default arrows
                                autoplay: false, // Disable autoplay
                                height: '250px',
                                direction: 'ltr', // Set direction to vertical
                            }}
                            ref={splideRef}>
                            <SplideSlide>
                                <div className="main-cards">
                                    <div className="main-img-parent">
                                        <img
                                            className="card-img-top main-card-img"
                                            src={`https://picsum.photos/id/10/200/100`} 
                                            alt="Card image cap" />
                                    </div>
                                    <div className="card-body">
                                        <Link href="#" className='main-card-title'>
                                            {" உணவு தயாரிப்பில் நல்லெண்ணெய் அதிகம் பயன்படுத்துவதால் கிடைக்கும் நன்மைகள் உணவு தயாரிப்பில் நல்லெண்ணெய் அதிகம் பயன்படுத்துவதால் கிடைக்கும் நன்மைகள் ".slice(0, 100)}...
                                        </Link>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="sliders-cards">
                                    <div className="slider-img-parent">
                                        <img
                                            className="card-img-top small-card-img"
                                            src="https://img-cdn.thepublive.com/fit-in/360x0/filters:format(webp)/tamil-ie/media/media_files/uploads/2020/10/Curry-leaves-kolambu-resized.jpg"
                                            alt="Card image cap"
                                        />
                                    </div>

                                    <div className="card-body">
                                        <Link href="#" className='small-card-title'>
                                            {" உணவு தயாரிப்பில் நல்லெண்ணெய் அதிகம் பயன்படுத்துவதால் கிடைக்கும் நன்மைகள் உணவு தயாரிப்பில் நல்லெண்ணெய் அதிகம் பயன்படுத்துவதால் கிடைக்கும் நன்மைகள் ".slice(0, 100)}...
                                        </Link>
                                    </div>
                                </div>
                            </SplideSlide>
                        </Splide>
                    </div>
                    <div className="slider-buttons my-2">
                        <button
                            onClick={handlePrev}
                            className="slider-button prev"
                            disabled={currentIndex === 0}
                            style={{ cursor: currentIndex === 0 ? 'not-allowed' : 'pointer' }}>
                            <i class="fa-solid fa-chevron-left"></i>
                        </button>
                        <button
                            onClick={handleNext}
                            className="slider-button next"
                            disabled={currentIndex === totalSlides - 1}
                            style={{ cursor: currentIndex === totalSlides - 1 ? 'not-allowed' : 'pointer' }}>
                            <i class="fa-solid fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="row main-card-parent">
                <div className="col-12 col-sm-6 col-xl-4 my-3 main-card-col" >
                    <div className="main-cards">
                        <div className="main-img-parent">
                            <img
                                className="card-img-top main-card-img"
                                src="https://img-cdn.thepublive.com/fit-in/360x0/filters:format(webp)/tamil-ie/media/media_files/uploads/2020/10/Curry-leaves-kolambu-resized.jpg"
                                alt="Card image cap" />
                        </div>
                        <div className="card-body">
                            <Link href="#" className='main-card-title'>
                                {" உணவு தயாரிப்பில் நல்லெண்ணெய் அதிகம் பயன்படுத்துவதால் கிடைக்கும் நன்மைகள் உணவு தயாரிப்பில் நல்லெண்ணெய் அதிகம் பயன்படுத்துவதால் கிடைக்கும் நன்மைகள் ".slice(0, 100)}...
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm col-xl my-3 main-card-col">
                    <div className="main-cards">
                        <div className="main-img-parent">
                            <img
                                className="card-img-top main-card-img"
                                src="https://img-cdn.thepublive.com/fit-in/360x0/filters:format(webp)/tamil-ie/media/media_files/uploads/2020/10/Curry-leaves-kolambu-resized.jpg"
                                alt="Card image cap"
                            />
                        </div>

                        <div className="card-body">
                            <Link href="#" className='main-card-title'>
                                {" உணவு தயாரிப்பில் நல்லெண்ணெய் அதிகம் பயன்படுத்துவதால் கிடைக்கும் நன்மைகள் உணவு தயாரிப்பில் நல்லெண்ணெய் அதிகம் பயன்படுத்துவதால் கிடைக்கும் நன்மைகள் ".slice(0, 100)}...
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm col-xl my-3 main-card-col">
                    <div className="main-cards">
                        <div className="main-img-parent">
                            <img
                                className="card-img-top main-card-img"
                                src="https://img-cdn.thepublive.com/fit-in/360x0/filters:format(webp)/tamil-ie/media/media_files/uploads/2020/10/Curry-leaves-kolambu-resized.jpg"
                                alt="Card image cap"
                            />
                        </div>

                        <div className="card-body">
                            <Link href="#" className='main-card-title'>
                                {" உணவு தயாரிப்பில் நல்லெண்ணெய் அதிகம் பயன்படுத்துவதால் கிடைக்கும் நன்மைகள் உணவு தயாரிப்பில் நல்லெண்ணெய் அதிகம் பயன்படுத்துவதால் கிடைக்கும் நன்மைகள் ".slice(0, 100)}...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default CatMain;
