import React from 'react';
import "@/assets/css/subCat.css";
import img from '@/assets/img/logo/right-up (3).png';
import Image from 'next/image';

function SubCatLinks() {
    return (
        <>
            <div className="row mb-4 gap-4 sub-cat-parent" style={{ borderLeft: '8px solid #0066b2', borderBottom: '1px solid gray', borderRight: '1px solid gray', borderTop: '1px solid gray' }}>
                <div className="row m-0 p-0">
                    <div className="col-8 col-md-9 border">
                        <div className="d-flex gap-5 py-2">
                            <div className="d-flex justify-content-around align-items-center gap-2">
                                <div className="subcatStyle-2"></div>
                                <a href="" className="sub-category">ஆன்மீகச் செய்திகள்</a>
                            </div>
                            <div className="d-flex justify-content-around align-items-center gap-2">
                                <div className="subcatStyle-2"></div>
                                <a href="" className="sub-category">ஆன்மீகச் செய்திகள்</a>
                            </div>
                            <div className="d-flex justify-content-around align-items-center gap-2">
                                <div className="subcatStyle-2"></div>
                                <a href="" className="sub-category">ஆன்மீகச் செய்திகள்</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 col-md-3 p-0">
                        <div className="view-all-btn">
                            <a href="" className="view-more-link">View More <Image src={img} alt="kk" width={20} height={20} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubCatLinks