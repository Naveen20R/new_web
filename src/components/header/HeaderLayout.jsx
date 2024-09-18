'use client'
import React, { useEffect, useState } from "react";

import { Sidenav, Nav } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';


import { useDispatch, useSelector } from "react-redux";
import {
  fetchSelectCategory,
  fetchCategories,
} from "../../actions/categoryAction";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faMoneyCheck } from "@fortawesome/free-solid-svg-icons";
import { DEFAULT_CATEGORY, IMAGE_BASE_URL } from "../../config";


const HeaderLayout = () => {
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

    setMainCategories(main);
    setMoreCategories([...more, ...main]);
  }, [categories]);

  // Handle category selection
  const handleLinkClick = (categoryName) => {
    dispatch(fetchSelectCategory(categoryName));
  };

  return (
    <div className='d-block d-md-none'>
      <Sidenav>
        <Sidenav.Body>
          <Nav>
            {mainCategories.map((category) => (
              <>
                {!category.child ? (
                  <Nav.Item
                    eventKey={category.id}
                    as={Link}
                    href={`/${category.type2}/${category.data_query}`}
                    onClick={() => handleLinkClick(category.name)}
                  // icon={<DashboardIcon />}
                  >
                    <div className="fw-bold">
                      <img
                        className="menu-img rounded-circle mx-2"
                        src={
                          category.image
                            ? IMAGE_BASE_URL + "category/" + category.type2 + "/" + category.image
                            : IMAGE_BASE_URL + "category/" + category.type2 + "/" + DEFAULT_CATEGORY
                        }
                      />
                      {category.name}
                    </div>
                    {/* {category.name.length > 10 ? (category.name.slice(0, 10) + '...') : category.name} */}
                  </Nav.Item>
                ) : (
                  <Nav.Menu
                    eventKey={category.id}
                    title={
                      <div className="fw-bold">
                      <img
                        className="menu-img rounded-circle mx-2"
                        src={
                          category.image
                            ? IMAGE_BASE_URL + "category/" + category.type2 + "/" + category.image
                            : IMAGE_BASE_URL + "category/" + category.type2 + "/" + DEFAULT_CATEGORY
                        }
                      />
                      {category.name}
                    </div>
                    }
                  >
                    {category.child.map((subCategory) => (
                      <Nav.Item
                        eventKey={subCategory.id}
                        as={Link}
                        href={`/${subCategory.type2}/${subCategory.data_query}`}
                        onClick={() => handleLinkClick(subCategory.name)}
                        className="fw-bold mx-3 my-1"
                      >
                        {subCategory.name}

                      </Nav.Item>
                    ))}
                  </Nav.Menu >
                )}
              </>
            ))}
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div >
  );
}

export default HeaderLayout;