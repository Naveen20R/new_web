"use client"
import React, { useEffect } from 'react';
import Header from "@/components/header/Header";
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import MainMenuLink from "@/components/mainmenu/MainMenuLink";
import MenuLayout from "@/layouts/MenuLayout";
import Link from 'next/link';
import '@/assets/css/articalStyle.css'
import axios from '../config';
// import { useDispatch, useSelector } from 'react-redux';
import '@/assets/css/articalStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faPhone, faHeart } from '@fortawesome/free-solid-svg-icons';
import Artical from '@/components/articals/Artical';
import ArticalHeading from '@/components/articals/ArticalHeading';
import MenuWorkout from '@/layouts/MenuLayout';
// import Menu from '@/layouts/Menu';
// import MenuWorkout from '@/layouts/Workout';


export default function Home() {
  // const { categories, selectCategory } = useSelector((state) => state.categories);  // all datas


  // console.log(categories);


  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        const res = await axios.get('/api/user/homePagecategories');
        console.log(res);

        // setMetadata(res.data);
      } catch (error) {
        console.error('Error fetching metadata:', error);
      } finally {
        // setMetadataLoading(false);
      }
    };
    fetchMetadata();
  }, []);


  return (
    <>
      <Header />
      <MenuWorkout />
      {/* <Menu /> */}
      {/* <MenuWorkout /> */}
      <div className="container my-3">
        <div className="row gap-2">
          <div className="col-12 col-md-8" >
            <div className='spotlight-post-item-wrap'>
             <ArticalHeading/>
              <Artical/>
            </div>
          </div>
          <div className="col" style={{ border: '2px solid red' }}>

          </div>
        </div>
      </div>

    </>
  );
}
