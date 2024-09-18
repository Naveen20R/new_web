"use client"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomePosts } from "../actions/postAction";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@/assets/css/articalStyle.css';
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

  const [message, setMessage] = useState(router.query?.message || "");

  useEffect(() => {
    dispatch(fetchHomePosts()).then(() => setLoading(false));
  }, [dispatch]);

  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        const res = await axios.get("/api/user/setting");
        setMetadata(res.data);
      } catch (error) {
        console.error("Error fetching metadata:", error);
      } finally {
        setMetadataLoading(false);
      }
    };
    fetchMetadata();
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
      <Head>
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
                  {/* <SpotLightSection /> */}
                  <CategoriesWithBlogSection />
                </div>
                <div className="col-lg-4"></div>
              </div>
            </div>
          </section>
        </div>
        {/* <div id="Ads" className="col" style={{ border: '1px solid red' }}></div> */}
      </section>

      <div className="container my-3">
        <div className="row gap-2">
          <div className="col-12 col-md-8" >
            <div className="row gap-2">
              <div className="col-12 ">
                <Artical />
              </div>

              <div className="col-12">
                <Artical />
              </div>

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