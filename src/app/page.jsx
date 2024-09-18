"use client"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomePosts } from "../actions/postAction";
import "../assets/css/style.css";
import Loader from "@/components/Loader";
import { useRouter } from "next/navigation";
import Head from "next/head";
import Link from 'next/link';
import axios from '../config';
import { IMAGE_BASE_URL } from "../config";
import { DEFAULT_FAVICON } from "@/config/constant";
import Artical from '@/components/articals/Artical';
import ArticalHeading from '@/components/articals/ArticalHeading';
import SpotLightSection from '@/components/home/SpotLight';
import CategoriesWithBlogSection from '@/components/home/CategoriesWithBlog';
import ViewAll from "@/components/ViewAll/ViewAll";
import ViewAllBreadcrumb from "@/components/ViewAll/ViewAllBreadcrumb";
import SubCategoryLink from "@/components/ViewAll/SubCategoryLink";
import ViewAllPagination from "@/components/ViewAll/ViewAllPagination";
import ReadMoreBreadcrumb from "@/components/ReadMore/ReadMoreBreadcrumb";

const Home = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [metadataLoading, setMetadataLoading] = useState(true);
  const [metadata, setMetadata] = useState(null);
  const router = useRouter();

  const [message, setMessage] = useState(router.query?.message || "");

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

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 2000); // 2 seconds delay

      // Cleanup timer on component unmount
      return () => clearTimeout(timer);
    }
  }, [message]);

  if (loading || metadataLoading) return <Loader />;

  return (
    <>
      {/* <Head>
        {
          <link
            rel="icon"
            href={`${IMAGE_BASE_URL}setting/${DEFAULT_FAVICON}`}
            type="image/png"
          />
        }
      </Head>
      {message && <div className="alert success-message">{message}</div>}
      <section className="row gap-2">
        <div className="col-lg-8 col-md-12 col-12">
          <section className="spotlight-post-area pt-20 pb-60">
            <div className="spotlight-post-inner-wrap">
              <div className="row justify-content-center">
                <div className="col-lg-12 col-md-12 col-12">
                  <SpotLightSection />
                  <CategoriesWithBlogSection />
                </div>
                <div className="col-lg-4"></div>
              </div>
            </div>
          </section>
        </div>
        {/* <div id="Ads" className="col" style={{ border: '1px solid red' }}></div> */}
      {/* </section> */}

      {/* ===== Artical Home Page ===== */}
      {/* <div className="container my-3">
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
          <div className="col" style={{ border: '2px solid red' }}></div>
        </div>
      </div> */}

      {/* ===== Category View All Page ===== */}
      {/* <div className="container mb-3">
        <ViewAllBreadcrumb />
        <SubCategoryLink />
        <div className="row gap-2">
          <div className="col-12 col-lg-8" >
              <div className="col-12 ">
                <ViewAll />
              </div>
              <div className="col-12">
                <ViewAll />
              </div>
              <div className="col-12">
                <ViewAll />
              </div>
              <div className="col-12">
                <ViewAll />
              </div>
          </div>
          <div className="col" style={{ border: '2px solid red' }}></div>
        </div>
        <ViewAllPagination />
      </div> */}

      {/* ===== Content Read More Page ===== */}

      {/* <div className="container mb-3">
        <ReadMoreBreadcrumb />
        <div className="row gap-2">
          <div className="col-12 col-lg-8" >
              <div className="col-12 ">
                <ViewAll />
              </div>
              <div className="col-12">
                <ViewAll />
              </div>
              <div className="col-12">
                <ViewAll />
              </div>
              <div className="col-12">
                <ViewAll />
              </div>
          </div>
          <div className="col" style={{ border: '2px solid red' }}></div>
        </div>
      </div> */}
    </>
  );
};

export default Home;