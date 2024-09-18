"use client"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomePosts } from "../actions/postAction";
import "../assets/css/style.css";
import Loader from "@/components/Loader";
import Head from "next/head";
import { useRouter } from "next/navigation";
import Link from 'next/link';
import axios from '../config';
import { IMAGE_BASE_URL } from "../config";
import { DEFAULT_FAVICON } from "@/config/constant";
import Artical from '@/components/articals/Artical';
import ArticalHeading from '@/components/articals/ArticalHeading';
import SpotLightSection from '@/components/home/SpotLight';
import CategoriesWithBlogSection from '@/components/home/CategoriesWithBlog';

const Home = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [metadataLoading, setMetadataLoading] = useState(true);
  const [metadata, setMetadata] = useState(null);
  const router = useRouter();
  const { homePosts } = useSelector((state) => state.posts);

  const [allPost, setAllPost] = useState([]);

  // useEffect(() => {
  //   dispatch(fetchHomePosts()).then(() => setLoading(false));
  // }, [dispatch]);



  useEffect(() => {
    // let obj = 
    let array = [];

    if (homePosts) {
      homePosts.map((ele) => {
        array.push({ category: ele.category, singlePost: ele.posts[0] })
      })
      setAllPost(array);


    }
  }, []);


  // console.log(homePosts, 'homePosts');





  // if (loading || metadataLoading) return <Loader />;

  return (
    <>
      <Head>
        {
          <link
            rel="icon"
            href={`${IMAGE_BASE_URL}setting/${DEFAULT_FAVICON}`}
            type="image/png"
          />
        }
      </Head>

      <div className="container my-3">
        <div className="row gap-2">
          <div className="col-12 col-md-8" >
            <div className="row gap-2">
              {
                allPost.map((ele) => {
                  return (
                    <div className="col-12 ">
                      <Artical uniquePost = {ele} />
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="col" style={{ border: '2px solid red' }}>

          </div>
        </div>
      </div>
    </>
  );
};

export default Home;