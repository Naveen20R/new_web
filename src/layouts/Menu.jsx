// import React from 'react'
// import './Navbar.css'

// const Menu = () => {
//     return (
//         <section className='container' style={{ height: '500px' }}>
//             <nav className='w-100 '>
//                 <ul className='d-flex justify-content-between list-unstyled border position-sticky'>
//                     <li className=''>
//                         <a href="">Nav Link 1</a>
//                         <ul className='bg-light d-flex justify-content-around container-sm position-absolute start-0'>
//                             <li>
//                                 <a href="">Sub Link 1.1</a>
//                             </li>
//                             <li>
//                                 <a href="">Sub Link 1.2</a>
//                             </li>
//                             <li>
//                                 <a href="">Sub Link 1.3</a>
//                             </li>
//                         </ul>
//                     </li>
//                     <li>
//                         <a href="">Nav Link 2</a>
//                     </li>
//                     <li>
//                         <a href="">Nav Link 3</a>
//                         <ul className='bg-light d-flex justify-content-around container-sm position-absolute start-0'>
//                             <li>
//                                 <a href="">Sub Link 3.1</a>
//                             </li>
//                             <li>
//                                 <a href="">Sub Link 3.2</a>
//                             </li>
//                         </ul>
//                     </li>
//                     <li>
//                         <a href="">Nav Link 4</a>
//                         <ul className='bg-light d-flex justify-content-around container-sm position-absolute start-0'>
//                             <li>
//                                 <a href="">Sub Link 4.1</a>
//                             </li>
//                             <li>
//                                 <a href="">Sub Link 4.2</a>
//                             </li>
//                         </ul>
//                     </li>
//                     <li>
//                         <a href="">More</a>
//                         <ul className='bg-light d-flex justify-content-around container-sm position-absolute start-0 more-parent'>
//                             <li>
//                                 <a href="" className='more-child'>Nav Link 5</a>
//                                 <ul className='more-child-list'>
//                                     <li>
//                                         <a href="">Sub Link 5.1</a>
//                                     </li>
//                                     <li>
//                                         <a href="">Sub Link 5.2</a>
//                                     </li>
//                                 </ul>
//                             </li>
//                             <li>
//                                 <a href="" className='more-child'>Nav Link 6</a>
//                                 <ul className='more-child-list'>
//                                     <li>
//                                         <a href="">Sub Link 6.1</a>
//                                     </li>
//                                     <li>
//                                         <a href="">Sub Link 6.2</a>
//                                     </li>
//                                     <li>
//                                         <a href="">Sub Link 6.3</a>
//                                     </li>
//                                 </ul>
//                             </li>
//                             <li>
//                                 <a href="" className='more-child'>Nav Link 7</a>
//                                 <ul className='more-child-list'>
//                                     <li>
//                                         <a href="">Sub Link 7.1</a>
//                                     </li>
//                                 </ul>
//                             </li>
//                         </ul>
//                     </li>
//                 </ul>
//             </nav>
//         </section>
//     )
// }

// export default Menu


// // =================== response 1
'use client'
import './Navbar.css';

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchSelectCategory,
    fetchCategories,
} from "../actions/categoryAction";
import { DEFAULT_CATEGORY, IMAGE_BASE_URL } from "../config";
import Link from 'next/link';

const Menu = () => {

    const dispatch = useDispatch();
    const { categories, selectCategory } = useSelector(
        (state) => state.categories
    );

    const [mainCategories, setMainCategories] = useState([]);
    const [moreCategories, setMoreCategories] = useState([]);

    // Fetch categories on component mount
    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    // Separate main and more categories
    useEffect(() => {
        const main = categories.filter(
            (category) => category.position === "main" && category.type2 !== "news"
        );
        const more = categories.filter(
            (category) => category.position === "more" && category.type2 !== "news"
        );
        setMainCategories(main.slice(0, 5));
        setMoreCategories([...more, ...main.slice(5)]);
    }, [categories]);

    // Handle category selection
    const handleLinkClick = (categoryName) => {
        dispatch(fetchSelectCategory(categoryName));
    };

    const [activeMenu, setActiveMenu] = useState(null); // Tracks active main menu on click/hover
    const [activeSubMenu, setActiveSubMenu] = useState(null); // Tracks active sub-menu under 'More'

    const handleMouseEnter = (categoryID) => {
        setActiveMenu(categoryID); // Set active menu on hover
    };

    const handleMouseLeave = () => {
        setActiveMenu(null); // Clear active menu on hover leave
    };

    const handleClick = (categoryID) => {
        setActiveMenu(activeMenu === categoryID ? null : categoryID); // Toggle menu on click
    };

    const handleSubMenuClick = (categoryID) => {
        setActiveSubMenu(activeSubMenu === categoryID ? null : categoryID); // Toggle sub-menu in 'More'
    };

    return (
        <section className='d-none d-md-block container-fluid bg-light '>
            <nav className='container w-100 text-center mb-1 '>
                <ul className=' list-unstyled position-sticky z-3 d-flex justify-content-center gap-2 flex-wrap align-items-start'>
                    {mainCategories.map((category) => (
                        <>
                            {!category.child ?
                                (
                                    <li className='px-4 py-2 rounded list-item' key={category.id}>
                                        <a
                                            href={`/${category.type2}/${category.data_query}`}
                                            onClick={() => handleLinkClick(category.name)}
                                        >
                                            <img
                                                className="menu-img rounded-circle me-2"
                                                src={
                                                    category.image
                                                        ? IMAGE_BASE_URL + "category/" + category.type2 + "/" + category.image
                                                        : IMAGE_BASE_URL + "category/" + category.type2 + "/" + DEFAULT_CATEGORY
                                                }
                                            />
                                            {category.name.length > 13 ? (category.name.slice(0, 13) + '...') : category.name}</a>
                                    </li>
                                ) : (

                                    <li className='px-4 py-2 rounded-top list-item d-flex align-items-center flex-column'
                                        onMouseEnter={() => handleMouseEnter(category.id)}
                                        onMouseLeave={handleMouseLeave} key={category.id}>
                                        <div className='d-flex gap-2 align-items-center justify-content-center'>
                                            <a href="#"
                                                onClick={() => handleClick(category.id)}>
                                                <img
                                                    className="menu-img rounded-circle me-2"
                                                    src={
                                                        category.image
                                                            ? IMAGE_BASE_URL + "category/" + category.type2 + "/" + category.image
                                                            : IMAGE_BASE_URL + "category/" + category.type2 + "/" + DEFAULT_CATEGORY
                                                    }
                                                />
                                                {category.name.length > 13 ? (category.name.slice(0, 13) + '...') : category.name}
                                            </a>
                                        </div>


                                        {activeMenu === category.id && <div className="arrow-indicator"></div>}

                                        {(activeMenu === category.id) && (
                                            <ul className='bg-white shadow rounded-bottom border-top border-2 border-black  container position-absolute start-0 top-100 py-2 list-unstyled' style={{ minHeight: '140px' }}>

                                                <div className='py-2 d-flex flex-wrap  justify-content-start gap-4'>
                                                    {category.child.map((subCategory) => (
                                                        <li className='d-flex gap-3 align-items-center rounded px-4 py-1 list-item' key={subCategory.id}>
                                                            <div className='shape'></div>
                                                            <a
                                                                href={`/${subCategory.type2}/${subCategory.data_query}`}
                                                                onClick={() => handleLinkClick(subCategory.name)}
                                                                style={{ fontSize: '14px' }}
                                                            >
                                                                {subCategory.name}
                                                                {/* {subCategory.name.length > 13 ? (subCategory.name.slice(0, 13) + '...') : subCategory.name} */}
                                                            </a>

                                                        </li>
                                                    ))}
                                                </div>
                                            </ul>
                                        )}
                                    </li>
                                )}
                        </>
                    ))}

                    {moreCategories.length > 0 && (
                        <li className='px-4 py-2 rounded-top list-item d-flex align-items-center flex-column'
                            onMouseEnter={() => handleMouseEnter(5)}
                            onMouseLeave={handleMouseLeave}>
                            <div className='d-flex  align-items-center justify-content-center'>
                                <i className="fa-solid fa-bars-staggered mx-2 fs-4 d-flex align-items-center justify-content-center" style={{width:'2rem', height:'2rem'}}></i>
                                <a href="#"
                                    onClick={() => handleClick(5)}>
                                    View More
                                </a>
                            </div>
                            {activeMenu === 5 && <div className="indicator-view-more"></div>}
                            {(activeMenu === 5) && (
                                <ul className='bg-white shadow rounded-bottom border-top border-2 border-black  container position-absolute start-0 top-100 py-2 list-unstyled' style={{ minHeight: '140px' }}>
                                    {moreCategories.map((category) => (
                                        <>
                                            {!category.child ? (
                                                <li className='text-start row row-cols-2 more-list-item col-5 col-lg-4 ' key={category.id}>
                                                    <a
                                                        href={`/${category.type2}/${category.data_query}`}
                                                        onClick={() => handleLinkClick(category.name)}
                                                        className=' rounded px-4 py-1 w-100'
                                                    >
                                                        <img
                                                            className="menu-img rounded-circle me-2"
                                                            src={
                                                                category.image
                                                                    ? IMAGE_BASE_URL + "category/" + category.type2 + "/" + category.image
                                                                    : IMAGE_BASE_URL + "category/" + category.type2 + "/" + DEFAULT_CATEGORY
                                                            }
                                                        />
                                                        {/* {category.name.length > 11 ? (category.name.slice(0, 11) + '...') : category.name} */}
                                                        {category.name}
                                                    </a>
                                                </li>
                                            ) :
                                                (
                                                    <>
                                                        <li className='text-start more-list-item d-block d-lg-flex  ' key={category.id}>
                                                            <a href="#" className='more-child w-100 w-md-30 w-lg-25 rounded px-4 py-1 d-flex flex-wrap ' onClick={() => handleSubMenuClick(category.id)}>
                                                                <img
                                                                    className="menu-img rounded-circle me-2"
                                                                    src={
                                                                        category.image
                                                                            ? IMAGE_BASE_URL + "category/" + category.type2 + "/" + category.image
                                                                            : IMAGE_BASE_URL + "category/" + category.type2 + "/" + DEFAULT_CATEGORY
                                                                    }
                                                                />
                                                                {category.name}
                                                            </a>
                                                            {(activeSubMenu === category.id) && (
                                                                <ul className=' list-unstyled d-flex w-100 w-lg-75 flex-wrap justify-content-start'>
                                                                    {category.child.map((subCategory) => (
                                                                        <li key={subCategory.id} className='more-list-item'>
                                                                            <a
                                                                                href={`/${subCategory.type2}/${subCategory.data_query}`}
                                                                                onClick={() => handleLinkClick(subCategory.name)}
                                                                                className='d-flex gap-2 align-items-center rounded px-4 py-1 '
                                                                                style={{ fontSize: '14px' }}

                                                                            >
                                                                                <div className='shape'></div>

                                                                                {subCategory.name}
                                                                            </a>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            )}

                                                        </li>
                                                    </>
                                                )
                                            }
                                        </>
                                    ))}
                                </ul >
                            )}
                        </li>
                    )}
                </ul>
            </nav>
        </section >
    );
};

export default Menu;