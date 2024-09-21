import React from 'react';
import "@/assets/css/CatHeadStyle.css";

function CatHead() {
    return (
        <>
            <div className="d-flex p-0 justify-content-between align-items-center gap-2 cat-parent" style={{marginBottom:'32px'}}>
                <div className="cat-link"></div>
                <h1 class="category-title" >ஆன்மீகம்</h1>
                {/* <div class="triangle-left"></div> */}
            </div>
        </>
    )
}

export default CatHead