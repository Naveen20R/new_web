import React, { useEffect } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from "react-redux";
import ArticalHeading from '../articals/ArticalHeading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "@/assets/css/articalStyle.css";
import axios from '../../config';
import ReadMoreBreadcrumb from "@/components/ReadMore/ReadMoreBreadcrumb";
import RelatedPost from './RelatedPost';

const data = [{
    title: 'உயிர்ச்சத்து குறைவால் ஏற்படும் நோய்கள்.? உயிர்ச்சத்து அதிகரிக்க உணவு முறைகள்...!',
    author: 'Aarumugam',
    date: '2024-09-20',
    whatsappLink: '',
    facebookLink: '',
    image: 'https://picsum.photos/id/55/500/300',
    description: 'உணவு தயாரிப்பில் நல்லெண்ணெய் அதிகம் பயன்படுத்துவதால் கிடைக்கும் நன்மைகள்: 1. தோல் சுகாதாரம்: நல்லெண்ணெய் ஜிங்க் மற்றும் அத்தியாவசிய வைட்டமின்களை கொண்டிருப்பதால், தோல் ஆரோக்கியமாக இருக்கும். இது தோலில் மிருதுவாக, குளிர்செய்யும் மற்றும் வயதான சுருக்கங்களை குறைக்கும். 2. இதய ஆரோக்கியம்: செசமோல் மற்றும் செசமின்கள் இதயத்திற்கு நல்லது. இதயம் மற்றும் இதயமெனும் மண்டலங்களில் கெட்ட கொழுப்புகள் உருவாகாமல் தடுக்கிறது. 3. எலும்பு வலிமை: நல்லெண்ணெய் செம்புச் சத்து மற்றும் ஜிங்க் சத்துகள் கொண்டதால், எலும்புகளுக்கு வலிமை அளிக்கிறது, ஆர்த்ரைடிஸ் வலி மற்றும் வீக்கங்களை குறைக்க உதவுகிறது. 4. புற்றுநோய் தடுப்பு: நல்லெண்ணெயில் போலேட் மற்றும் மக்னீசியம் அதிகம் இருப்பதால், குடல் மற்றும் ஈரல் புற்றுநோய்களை தடுக்கும். 5. மனம் அமைதி: டிரோசின் மற்றும் செரட்டோனின் நரம்பியல் செயற்பாட்டைப் பராமரிக்க உதவுகிறது, மன அழுத்தத்தை குறைக்க உதவுகிறது. 6. கல்லீரல் சுகாதாரம்: நல்லெண்ணெய் கல்லீரலுக்கு பாதுகாப்பு அளித்து, ஆல்கஹால் மற்றும் நச்சுதன்மைகளை வெளியேற்றும். 7. பற்கள் மற்றும் குழந்தைகள்: பற்கள் வலிமை பெற, நல்லெண்ணெய் பல் துலக்குவதில் பயன்படும். குழந்தைகளுக்கு உடல் மற்றும் தோல் ஆரோக்கியத்தை மேம்படுத்துகிறது.'
}]


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

    const formatDate = (dateStr) => {
        const date = new Date(dateStr);

        // Format the date to '17 Sep 2024'
        return date.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });
    };

    // const splitDescription = (description) => {
    //     const parts = description.split(/(?=\d+\.)/).filter(part => part.trim() !== "");
    //     return parts.map((part, index) => (
    //         <p className='my-2' key={index}>
    //             {part}
    //         </p>
    //     ));
    // }

    const splitDescription = (description) => {
        // Split by any number followed by a period (e.g., '1.', '2.', etc.)
        const parts = description.split(/(?=\d+\.)/).filter(part => part.trim() !== "");
    
        // Map over the parts, split by ':', and format the text
        return parts.map((part, index) => {
            const [beforeColon, afterColon] = part.split(':'); // Split each part by ':'
    
            return (
                <p className='my-2' key={index}>
                    <strong>{beforeColon ? beforeColon.trim() : ""}</strong>
                    {afterColon && `: ${afterColon.trim()}`} {/* Add colon back with trimmed content */}
                </p>
            );
        });
    };

    return (
        <section>
            <ReadMoreBreadcrumb />
            {data.map((item, idx) => (
                <div className='my-4'>
                    <div className='mb-4'>
                  
                        <h6 className='fw-semibold' style={{fontSize:'18px'}}>
                            {item.title}
                        </h6>
                        <div className='w-100 d-flex flex-column flex-lg-row justify-content-between gap-3 my-2'>
                            <div className='d-flex justify-content-md-start gap-4 justify-content-between'>
                                <div className='d-flex gap-2 align-items-center'>
                                    <i class="fa-solid fa-user-check"></i>
                                    <small className=''>
                                        {item.author}
                                    </small>
                                </div>
                                <div className='d-flex gap-2 align-items-center'>
                                    <i class="fa-regular fa-calendar"></i>
                                    <small className=''>
                                        {formatDate(item.date)}
                                    </small>
                                </div>
                            </div>
                            <div className="d-none d-lg-flex align-items-center justify-content-center gap-4">
                                Share:
                                <Link href={item.whatsappLink} className='no-underline'>
                                    <span className='phone-icon rounded-circle'>
                                        <i className="fa-brands fa-whatsapp fs-4"></i>
                                    </span>
                                    {/* WhatsApp */}
                                </Link>
                                <Link href={item.facebookLink} className='no-underline'>
                                    <span className='facebook-icon'>
                                        <i className="fa-brands fa-facebook-f fs-6"></i>
                                    </span>
                                    {/* Facebook */}
                                </Link>
                            </div>
        
                        </div>
                    </div>

                    <div className=''>
                        <div className="row px-2">
                            <div className="col-12 col-lg-10" >
                                <img
                                    src={item.image}
                                    className="img-fluid w-100"
                                    alt="img"
                                    style={{ height: '300px' }}
                                />
                            </div>
                            <div className='my-3' style={{ fontSize: '14px' }}>
                                {splitDescription(item.description)}
                            </div>
                            <div className="d-flex d-lg-none align-items-center justify-content-start gap-4">
                                Share:
                                <Link href={item.whatsappLink} className='no-underline'>
                                    <span className='phone-icon rounded-circle'>
                                        <i className="fa-brands fa-whatsapp fs-4"></i>
                                    </span>
                                    WhatsApp
                                </Link>
                                <Link href={item.facebookLink} className='no-underline'>
                                    <span className='facebook-icon'>
                                        <i className="fa-brands fa-facebook-f fs-6"></i>
                                    </span>
                                    Facebook
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <section className='my-4 mt-0' id='RelatedPost'>
                <div>
                    <RelatedPost />
                </div>
            </section>
        </section>
    )

}

export default ReadMore;
