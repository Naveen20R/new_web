import React from 'react';
import "@/assets/css/homeStyle.css";

let title = "ஆன்மீகச் செய்திகள்"

function SmallCard() {
    return (
        <>
            <div className="smallCard">
                <div className="row g-0">
                    <div className="col-12 subCategory-card">
                        <div className="subcatStyle"></div>
                        <h3 className='subcat_title'>{title.slice(0, 10)}...</h3>
                    </div>
                </div>
                <div className="left-style"></div>
            </div>

        </>
    )
}

export default SmallCard