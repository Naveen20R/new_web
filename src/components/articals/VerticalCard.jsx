import React from 'react';
import '@/assets/css/verticalCardStyle.css';
import Link from 'next/link';

function VerticalCard() {

    let title = "உணவு தயாரிப்பில் நல்லெண்ணெய் அதிகம் பயன்படுத்துவதால் கிடைக்கும் நன்மைகள் உணவு தயாரிப்பில் நல்லெண்ணெய் அதிகம் பயன்படுத்துவதால்."
    return (
        <div className="row  ver-card">
            <div className="col-6 d-flex flex-column justify-content-between">
                <Link href="/" className='ver-post-title'>{title.slice(30)}...</Link>
                <div className="d-flex flex-wrap gap-2 mt-3">
                    <Link href="" className='read-more-btn-style'>Read More <i className="fa-solid fa-arrow-right"></i></Link>
                </div>
            </div>
            <div className="col-6">
                <img className="ver-card-img" src="https://img-cdn.thepublive.com/fit-in/360x0/filters:format(webp)/tamil-ie/media/media_files/uploads/2020/10/Curry-leaves-kolambu-resized.jpg" alt="" />

            </div>
        </div>

    )
}

export default VerticalCard