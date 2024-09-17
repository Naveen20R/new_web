"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchSelectCategory,
    fetchCategories,
} from "../actions/categoryAction";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faMoneyCheck } from "@fortawesome/free-solid-svg-icons";
import { Dropdown, ButtonToolbar } from "rsuite";
import { DEFAULT_CATEGORY, IMAGE_BASE_URL } from "../config";
import '@/assets/css/MainMenuStyle.css';
import Drops01 from "@/components/drops/Drops01";



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

        console.log(main, 'main');

        setMainCategories(main.slice(0, 5));
        setMoreCategories([...more, ...main.slice(5)]);
    }, [categories]);

    // Handle category selection
    const handleLinkClick = (categoryName) => {
        dispatch(fetchSelectCategory(categoryName));
    };

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        }
        return text.slice(0, maxLength) + '...';
    };

    console.log(categories,'categories');
    


    return (
        <>
            {/* <Dropdown title="File" icon="jo">
                <Dropdown.Item icon="ko" shortcut="⌘ ⇧ N">
                    New File with Current Profile
                </Dropdown.Item>
            </Dropdown> */}

            <div className="container my-4 mx-auto d-none d-md-block">
                <ButtonToolbar className="d-flex justify-content-start gap-2">
                    {mainCategories.map((category) => (
                        <Dropdown
                            key={category.id}
                            title={
                                <div className="fw-bold" style={{ overflow: 'hidden' }}>
                                    <img
                                        className="menu-img rounded-circle mx-2"
                                        src={
                                            category.image
                                                ? IMAGE_BASE_URL + "category/" + category.type2 + "/" + category.image
                                                : IMAGE_BASE_URL + "category/" + category.type2 + "/" + DEFAULT_CATEGORY
                                        }
                                    />
                                    {truncateText(category.name, 8)}
                                </div>
                            }
                            trigger={['click', 'hover']}
                            style={{ flex: 1 }}
                        >
                            {!category.child ? (
                                <Dropdown.Item
                                    as={Link}
                                    href={`/${category.type2}/${category.data_query}`}
                                    onClick={() => handleLinkClick(category.name)}
                                    className="fw-bold"
                                >
                                    {category.name}
                                </Dropdown.Item>
                            ) : (
                                category.child.map((subCategory) => (
                                    <Dropdown.Item
                                        key={subCategory.id}
                                        as={Link}
                                        href={`/${subCategory.type2}/${subCategory.data_query}`}
                                        onClick={() => handleLinkClick(subCategory.name)}
                                        className="fw-bold"
                                    >
                                        {subCategory.name}
                                    </Dropdown.Item>
                                ))
                            )}
                        </Dropdown>
                    ))}

                    {moreCategories.length > 0 && (
                        <Dropdown
                            title={
                                <div className="fw-bold d-flex align-items-center">
                                    <FontAwesomeIcon icon={faMoneyCheck} className="mx-2 menu-img" />
                                    View More
                                </div>
                            }
                            trigger={['click', 'hover']}
                            style={{ border: '2px solid green', flex: 1 }}>

                            {moreCategories.map((category) => (
                                <Dropdown.Menu
                                    key={category.id}
                                    title={
                                        <>
                                            <img style={{ border: '2px solid yellow' }}
                                                className="menu-img rounded-circle mx-2"
                                                src={
                                                    category.image
                                                        ? IMAGE_BASE_URL + "category/" + category.type2 + "/" + category.image
                                                        : IMAGE_BASE_URL + "category/" + category.type2 + "/" + DEFAULT_CATEGORY
                                                }
                                            />
                                            {category.name}
                                        </>
                                    }
                                    trigger={['click', 'hover']}
                                    className="fw-bold">
                                    {!category.child ? (
                                        <Dropdown.Item
                                            style={{ border: '2px solid yellow' }}
                                            as={Link}
                                            href={`/${category.type2}/${category.data_query}`}
                                            onClick={() => handleLinkClick(category.name)}
                                            className="fw-bold">
                                            {category.name}
                                        </Dropdown.Item>
                                    ) : (
                                        category.child.map((subCategory) => (
                                            <Dropdown.Item
                                                key={subCategory.id}
                                                as={Link}
                                                title="leftStart" placement="leftStart"
                                                href={`/${subCategory.type2}/${subCategory.data_query}`}
                                                onClick={() => handleLinkClick(subCategory.name)}
                                                className="fw-bold">
                                                {subCategory.name}
                                            </Dropdown.Item>
                                        ))
                                    )}
                                </Dropdown.Menu>
                            ))}
                        </Dropdown>
                    )}
                </ButtonToolbar>
            </div>
        </>
    );
};

export default Menu;