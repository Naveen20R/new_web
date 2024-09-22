import React, { useEffect, useRef, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Link from 'next/link';

import './CategoryStyle.css'

const ImageGallery = () => {
    const splideRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);

    const Sub_Categories = [
        { id: 1, name: 'Category 1', img: 'https://via.placeholder.com/200x150' },
        { id: 2, name: 'Category 2', img: 'https://via.placeholder.com/200x150' },
        { id: 3, name: 'Category 3', img: 'https://via.placeholder.com/200x150' },
        { id: 4, name: 'Category 4', img: 'https://via.placeholder.com/200x150' },
        { id: 5, name: 'Category 5', img: 'https://via.placeholder.com/200x150' },
        { id: 6, name: 'Category 6', img: 'https://via.placeholder.com/200x150' },
        { id: 7, name: 'Category 7', img: 'https://via.placeholder.com/200x150' },
        { id: 8, name: 'Category 8', img: 'https://via.placeholder.com/200x150' },
        { id: 9, name: 'Category 9', img: 'https://via.placeholder.com/200x150' },
        { id: 10, name: 'Category 10', img: 'https://via.placeholder.com/200x150' },
   
    ];

    const perPage = 3; // Number of slides visible at once
    const totalSlides = Sub_Categories.length;

    useEffect(() => {
        if (splideRef.current) {
            splideRef.current.splide.on('move', (newIndex) => {
                setCurrentIndex(newIndex);
            });
        }
    }, []);

    const handlePrev = () => {
        if (splideRef.current) {
            splideRef.current.splide.go('-1'); // Move 1 slide backward
        }
    };

    const handleNext = () => {
        if (splideRef.current) {
            splideRef.current.splide.go('+1'); // Move 1 slide forward
        }
    };

    // Calculate progress percentage based on the current slide
    const getProgressPercentage = () => {
        const maxIndex = totalSlides - perPage;
        const clampedIndex = Math.min(currentIndex, maxIndex); // Ensure we don't exceed the max index
        return ((clampedIndex + 1) / (maxIndex + 1)) * 100;
    };

    return (
        <>
            <Splide
                ref={splideRef}
                options={{
                    type: 'slide',
                    perPage: perPage,
                    pagination: false, // Disable default pagination
                    arrows: false, // Disable default arrows
                    autoplay: false,
                    drag: true,
                    // gap: '1rem',
                }}
            >
                {Sub_Categories.map((item) => (
                    <SplideSlide key={item.id}>
                        <div className="position-relative h-100 px-2 col sub-category-wrap">
                            <img
                                src={item.img}
                                alt={`Random Image`}
                                style={{ objectFit: 'cover', height: '150px', width: '100%' }}
                                className="sub-category-image"
                            />
                            <p style={{ textAlign: 'center' }} className="position-absolute bottom-0 ps-2 text-white">
                                {item.name}
                            </p>
                        </div>
                    </SplideSlide>
                ))}
            </Splide>

            {/* Progress Bar */}
            <div className="my-slider-progress mt-2">
                <div
                    className="my-slider-progress-bar"
                    style={{ width: `${getProgressPercentage()}%`, transition: 'width 400ms ease' }}
                />
            </div>

            {/* Navigation Buttons */}
            <div className="d-flex justify-content-end gap-4 mt-3 px-2">
                <span
                    onClick={handlePrev}
                    style={{
                        cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
                        color: currentIndex === 0 ? 'gray' : 'blue',
                    }}
                >
                    <i className="fa-solid fa-arrow-left-long"></i>
                </span>
                <span
                    onClick={handleNext}
                    style={{
                        cursor: currentIndex === totalSlides - perPage ? 'not-allowed' : 'pointer',
                        color: currentIndex === totalSlides - perPage ? 'gray' : 'blue',
                    }}
                >
                    <i className="fa-solid fa-arrow-right-long"></i>
                </span>
            </div>
        </>
    );
};


export default ImageGallery;
