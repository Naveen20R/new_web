import React from 'react';
import Link from 'next/link';
import Artical from '../articals/Artical';
import "@/assets/css/catMainstyle.css";

function CatMain() {
    return (
        <>
            <div className="row" style={{ borderBottom: '1px solid rgba(0, 101, 178, 0.263)' }}>
                <div className="col-12 col-sm-12 col-md-12 col-lg-8 main-category-2" id="main-category-2">
                    <Artical />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                    <div className="row py-3" style={{ borderBottom: '1px solid #0065b243' }}>
                        <div className="col-12 col-md-4">
                            <img className="w-100 h-100" style={{ borderRadius: '5px' }} src="https://img-cdn.thepublive.com/fit-in/360x0/filters:format(webp)/tamil-ie/media/media_files/uploads/2020/10/Curry-leaves-kolambu-resized.jpg" alt="" />
                        </div>
                        <div className="col-12 col-md-8">
                            <Link href="/" className='desc-1'>
                                {" உணவு தயாரிப்பில் நல்லெண்ணெய் அதிகம் பயன்படுத்துவதால் கிடைக்கும் நன்மைகள் உணவு தயாரிப்பில் நல்லெண்ணெய் அதிகம் பயன்படுத்துவதால்.".slice(0, 50)}...
                            </Link>
                        </div>
                    </div>
                    <div className="row py-3">
                        <div className="col-12 col-md-4">
                            <img className="w-100 h-100" style={{ borderRadius: '5px' }} src="https://img-cdn.thepublive.com/fit-in/360x0/filters:format(webp)/tamil-ie/media/media_files/uploads/2020/10/Curry-leaves-kolambu-resized.jpg" alt="" />
                        </div>
                        <div className="col-12 col-md-8">
                            <Link href="/" className='desc-1'>
                                {" உணவு தயாரிப்பில் நல்லெண்ணெய் அதிகம் பயன்படுத்துவதால் கிடைக்கும் நன்மைகள் உணவு தயாரிப்பில் நல்லெண்ணெய் அதிகம் பயன்படுத்துவதால்.".slice(0, 50)}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CatMain