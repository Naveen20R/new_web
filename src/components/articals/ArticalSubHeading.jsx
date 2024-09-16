import React from 'react';
import Link from 'next/link';
import '@/assets/css/subHeadingStyle.css';

const ArticalSubHeading = () => {
    return (
        <div className='sub-menus mt-4'>
            <div className='row'>
                <div className='col-lg-12'>
                    <ul className='sub-menu-items'>
                        {/* Consider mapping over dynamic categories if applicable */}
                        <li>
                            <Link href="/" aria-label="Home">தலைப்புச் செய்திகள்</Link>
                        </li>
                        <li>
                            <Link href="/tamilnadu" aria-label="Tamil Nadu">தமிழகம்</Link>
                        </li>
                        <li>
                            <Link href="/world" aria-label="World">உலகம்</Link>
                        </li>
                        <li>
                            <Link href="/cinema" aria-label="Cinema">சினிமா</Link>
                        </li>
                        <li>
                            <Link href="/sports" aria-label="Sports">விளையாட்டு</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ArticalSubHeading;
