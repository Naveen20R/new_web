'use client'
import React from 'react';
import ReadMore from "@/components/ReadMore/ReadMore";
import SubCatLinks_02 from '@/components/category/SubCatLinks_02';
import Artical from '@/components/articals/Artical';
import '@/assets/css/homeStyle.css';
import "@/assets/css/style.css";

function page() {
    return (
        <>
            {/* ===== Content Read More Page ===== */}
            <div className="container-fluid mb-3">
                <div className="row gap-2">
                    <div className="col-12 col-md-8" >
                        {/* Submenus start */}
                        <SubCatLinks_02 />
                        {/* Submenus end */}

                        {/* cards start */}
                        <div className="bb-line">
                            <Artical />
                        </div>
                        <div className="bb-line">
                            <Artical />
                        </div>
                        <div className="bb-line">
                            <Artical />
                        </div>
                        <div className="bb-line">
                            <Artical />
                        </div>
                        {/* cards end */}
                    </div>
                    <div className="col-12 col-md-12" style={{ borderLeft: '1px solid rgba(0, 101, 178, 0.263)' }}></div>
                </div>
            </div>
        </>

    )
}

export default page