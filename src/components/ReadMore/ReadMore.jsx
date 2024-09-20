import React, { useEffect } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from "react-redux";
import ArticalHeading from '../articals/ArticalHeading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "@/assets/css/articalStyle.css";
import axios from '../../config';

const description = 'உணவு தயாரிப்பில் நல்லெண்ணெய் அதிகம் பயன்படுத்துவதால் கிடைக்கும் நன்மைகள்: 1. தோல் சுகாதாரம்: நல்லெண்ணெய் ஜிங்க் மற்றும் அத்தியாவசிய வைட்டமின்களை கொண்டிருப்பதால், தோல் ஆரோக்கியமாக இருக்கும். இது தோலில் மிருதுவாக, குளிர்செய்யும் மற்றும் வயதான சுருக்கங்களை குறைக்கும். 2. இதய ஆரோக்கியம்: செசமோல் மற்றும் செசமின்கள் இதயத்திற்கு நல்லது. இதயம் மற்றும் இதயமெனும் மண்டலங்களில் கெட்ட கொழுப்புகள் உருவாகாமல் தடுக்கிறது. 3. எலும்பு வலிமை: நல்லெண்ணெய் செம்புச் சத்து மற்றும் ஜிங்க் சத்துகள் கொண்டதால், எலும்புகளுக்கு வலிமை அளிக்கிறது, ஆர்த்ரைடிஸ் வலி மற்றும் வீக்கங்களை குறைக்க உதவுகிறது. 4. புற்றுநோய் தடுப்பு: நல்லெண்ணெயில் போலேட் மற்றும் மக்னீசியம் அதிகம் இருப்பதால், குடல் மற்றும் ஈரல் புற்றுநோய்களை தடுக்கும். 5. மனம் அமைதி: டிரோசின் மற்றும் செரட்டோனின் நரம்பியல் செயற்பாட்டைப் பராமரிக்க உதவுகிறது, மன அழுத்தத்தை குறைக்க உதவுகிறது. 6. கல்லீரல் சுகாதாரம்: நல்லெண்ணெய் கல்லீரலுக்கு பாதுகாப்பு அளித்து, ஆல்கஹால் மற்றும் நச்சுதன்மைகளை வெளியேற்றும். 7. பற்கள் மற்றும் குழந்தைகள்: பற்கள் வலிமை பெற, நல்லெண்ணெய் பல் துலக்குவதில் பயன்படும். குழந்தைகளுக்கு உடல் மற்றும் தோல் ஆரோக்கியத்தை மேம்படுத்துகிறது.'

const ReadMore = () => {
    const dispatch = useDispatch();
    const { categories, selectCategory } = useSelector(
        (state) => state.categories
    );

    //   useEffect(() => {
    //     const fetchTrendingPosts = async () => {
    //       try {
    //         const resSpotlight = await axios.get(`/api/user/spotlight`);
    //         console.log(resSpotlight.data);


    //         // if (user) {
    //         //   const likesResponse = await axios.get(`/api/user/getLikesByUser`, {
    //         //     params: { id: user.id },
    //         //   });
    //         //   setClickedBlogArticleIconId(likesResponse.data.likes);
    //         // }

    //         // setNoPost(1);
    //       } catch (error) {
    //         console.error('Error fetching data:', error);
    //       }
    //     };

    //     fetchTrendingPosts();
    //   }, []);

    const splitByNumber = (description) => {
        // Split by any number followed by a period (e.g., '1.', '2.', etc.)
        const parts = description.split(/(?=\d+\.)/).filter(part => part.trim() !== "");
        return parts;
    };

    // Usage
    const splitParts = splitByNumber(description);

    console.log(splitParts);

    return (
        <div className="artical" style={{ borderBottom: '1px solid rgb(228, 228, 228)', padding: '10px 0px' }}>
            <Link href="/" className='post-title'>
                உயிர்ச்சத்து குறைவால் ஏற்படும் நோய்கள்.? உயிர்ச்சத்து அதிகரிக்க உணவு முறைகள்...!
            </Link>

            <div className="d-flex my-2 flex-wrap justify-content-start align-items-center gap-4">
                <div className="d-flex flex-row flex-wrap align-items-center justify-content-between w-75 gap-3">
                    <div className="current-date">
                        {/* <FontAwesomeIcon icon={faCalendar} /> */}
                        <p className='my-auto posted-date-key'>Posted : <span className='posted-date'>11/06/2024</span></p>
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

            <div className="card border-0">
                <div className="row">
                    <div className="col-md-6">
                        <div className="artical-image">
                            <img
                                src="https://tnreaders.in/images/post/news-detail/7d7702b1-54d2-40.jpg"
                                className="card-img img-fluid w-100 h-100"
                                alt="Article"
                            />
                        </div>
                    </div>

                    {/* 
                    <div className='text-wrap my-2'>
                        உணவு தயாரிப்பில் நல்லெண்ணெய் அதிகம் பயன்படுத்துவதால் கிடைக்கும் நன்மைகள்: 1. தோல் சுகாதாரம்: நல்லெண்ணெய் ஜிங்க் மற்றும் அத்தியாவசிய வைட்டமின்களை கொண்டிருப்பதால், தோல் ஆரோக்கியமாக இருக்கும். இது தோலில் மிருதுவாக, குளிர்செய்யும் மற்றும் வயதான சுருக்கங்களை குறைக்கும். 2. இதய ஆரோக்கியம்: செசமோல் மற்றும் செசமின்கள் இதயத்திற்கு நல்லது. இதயம் மற்றும் இதயமெனும் மண்டலங்களில் கெட்ட கொழுப்புகள் உருவாகாமல் தடுக்கிறது. 3. எலும்பு வலிமை: நல்லெண்ணெய் செம்புச் சத்து மற்றும் ஜிங்க் சத்துகள் கொண்டதால், எலும்புகளுக்கு வலிமை அளிக்கிறது, ஆர்த்ரைடிஸ் வலி மற்றும் வீக்கங்களை குறைக்க உதவுகிறது. 4. புற்றுநோய் தடுப்பு: நல்லெண்ணெயில் போலேட் மற்றும் மக்னீசியம் அதிகம் இருப்பதால், குடல் மற்றும் ஈரல் புற்றுநோய்களை தடுக்கும். 5. மனம் அமைதி: டிரோசின் மற்றும் செரட்டோனின் நரம்பியல் செயற்பாட்டைப் பராமரிக்க உதவுகிறது, மன அழுத்தத்தை குறைக்க உதவுகிறது. 6. கல்லீரல் சுகாதாரம்: நல்லெண்ணெய் கல்லீரலுக்கு பாதுகாப்பு அளித்து, ஆல்கஹால் மற்றும் நச்சுதன்மைகளை வெளியேற்றும். 7. பற்கள் மற்றும் குழந்தைகள்: பற்கள் வலிமை பெற, நல்லெண்ணெய் பல் துலக்குவதில் பயன்படும். குழந்தைகளுக்கு உடல் மற்றும் தோல் ஆரோக்கியத்தை மேம்படுத்துகிறது.
                    </div> */}

                    {/* <div className='my-3' dangerouslySetInnerHTML={{ __html: splitDescription(data) }} /> */}
                    {/* <div className='my-3' dangerouslySetInnerHTML={{ __html: splitParts }} /> */}
                    <div className='my-4'>
                        {splitParts.map((part, index) => (
                            <p key={index}>{part}</p> // Display each part in a new line
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ReadMore;
