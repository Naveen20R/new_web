import React, { useEffect, useRef, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Link from 'next/link';

const ImageGallery = () => {
    const splideRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);

    const Sub_Categories = [
        { id: 10, name: 'ஆன்மீகச் செய்திகள்', img: "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg" },
        { id: 33, name: 'ஆன்மீகக் குறிப்புகள்', img: "https://cdn.eso.org/images/thumb300y/eso2008a.jpg" },
        { id: 100, name: 'ஆன்மீகத் தளங்கள்', img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9YYh5Fk1u9VsWWr1MhkyQeOzeNbtnnMO96g&s" },
        { id: 33, name: 'ஆன்மீகக் குறிப்புகள்', img: "https://cdn.eso.org/images/thumb300y/eso2008a.jpg" },
        { id: 10, name: 'ஆன்மீகச் செய்திகள்', img: "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg" },
    ];
    let perpage = 3;
    const totalSlides = Math.floor(Sub_Categories.length / perpage);

    // console.log('ji',Math.floor(2.5));

    useEffect(() => {
        if (splideRef.current) {
            splideRef.current.splide.on('move', (newIndex) => {
                setCurrentIndex(newIndex);
            });
        }

        // if (splideRef.current) {
        //     const { splide } = splideRef.current;
        //     // Listen for slide change event
        //     splide.on('move', (newIndex) => {
        //         setCurrentIndex(newIndex);
        //         // Disable autoplay on user interaction
        //         splide.options = { ...splide.options, autoplay: false };
        //     });
        // }
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


    console.log(totalSlides, 'totalSlides');
    console.log(currentIndex, 'currentIndex');


    return (
        <>
            <Splide
            
                ref={splideRef}
                options={{
                    type: 'slide', // Change to 'slide' for non-looping
                    perPage: 3,
                    pagination: false, // Disable pagination circles
                    arrows: false, // Disable default arrows
                    autoplay: false, // Disable autoplay
                    // height: '250px',
                    direction: 'ltr',
                }}
                className="my-splide"
            >
                {Sub_Categories.map((item, index) => {
                    return (
                        <SplideSlide key={item.id}>
                            <div className="position-relative h-100 px-2  col sub-category-wrap">
                                <img
                                    src={item.img}
                                    alt={`Random Image`}
                                    style={{ objectFit: 'cover', height: '100px', width: '100%' }}
                                    className="sub-category-image"
                                />
                                <p style={{ textAlign: 'center' }} className="position-absolute bottom-0 text-white w-75 mx-auto">
                                    {item.name}
                                </p>
                            </div>
                        </SplideSlide>
                    );
                })}
            </Splide>
            <div className="d-flex justify-content-end gap-4 mt-3 px-2">
                <button onClick={handlePrev} className="btn btn-primary"
                    disabled={currentIndex === 0}
                    style={{ cursor: currentIndex === 0 ? 'not-allowed' : 'pointer' }}><i className="fa-solid fa-chevron-left"></i></button>
                <button onClick={handleNext} className="btn btn-primary"
                    disabled={currentIndex === totalSlides}
                    style={{ cursor: currentIndex === totalSlides ? 'not-allowed' : 'pointer' }}>
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            </div>

        </>
    );
};

export default ImageGallery;
