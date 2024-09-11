import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/assets/css/MainMenuStyle.css';

const MainMenuLink = () => {

    return (
        <div className="dropdown-container">
            <div className="my-2 d-flex main-menu-dropdown justify-content-start align-items-center gap-2">
                <img
                    src="https://tnreaders.in/images/category/article/Spiritual_Messages.png"
                    className="leftMenu-img"
                    alt="leftMenu_menu"
                />
                <span className="fw-bold main-menu-title">ஆன்மீகம்</span>
                <i className="fa-solid fa-angle-down my-auto"></i>
            </div>
            <div className="dropdown-menu">
                <ul>
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                </ul>
            </div>
        </div>
    );
};

export default MainMenuLink;
