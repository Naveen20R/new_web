'use client'
import React from 'react';

import ReadMore from "@/components/ReadMore/ReadMore";

// import "../assets/css/style.css";

function page() {
    return (
        <>
            {/* ===== Content Read More Page ===== */}
            {/* <hr /> */}
            <div className="container mb-3">
                <div className="row gap-2">
                    <div className="col-12 col-lg-8" >
                        <div className="col-12 ">
                            <ReadMore />
                        </div>
                    </div>
                    <div className="col" style={{ border: '2px solid red' }}></div>
                </div>
            </div>
        </>

    )
}

export default page