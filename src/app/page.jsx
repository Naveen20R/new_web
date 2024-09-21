"use client"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomePosts } from "../actions/postAction";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import '@/assets/css/homeStyle.css';
import "@/assets/css/style.css";
import Loader from "@/components/Loader";
import { useRouter } from "next/navigation";
import Head from "next/head";
import Link from 'next/link';
import axios from '../config';
import { IMAGE_BASE_URL } from "../config";
import { DEFAULT_FAVICON } from "@/config/constant";
import CatHead from "@/components/category/CatHead";
import SubCatLinks from "@/components/category/SubCatLinks";
import CatMain from "@/components/category/CatMain";
import '@splidejs/splide/dist/css/splide.min.css';

import ViewCategory from "@/components/ViewAll/ViewCategory";

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

  const { homePosts } = useSelector((state) => state.posts);

  const [allPost, setAllPost] = useState([]);

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
  let title = "உணவு தயாரிப்பில் நல்லெண்ணெய் அதிகம் பயன்படுத்துவதால் கிடைக்கும் நன்மைகள் உணவு தயாரிப்பில் நல்லெண்ணெய் அதிகம் பயன்படுத்துவதால்."

  return (


    <>
      {/* ===== Artical Home Page ===== */}
      <div className="container">
        <div className="row my-5 gap-3" >
          <div className="col-12 col-md-8">

            {/* Tiitle start */}
            <CatHead />
            {/* Tiitle end */}

            {/* Category start */}
            <SubCatLinks />
            {/* Category end */}

            {/* main card start */}
            <CatMain />
            {/* main card end */}
          </div>
          <div className="col" style={{ borderLeft: '1px solid rgba(0, 101, 178, 0.263)' }}>
            <h2>Ads</h2>
          </div>
        </div>
      </div>

      {/* <div className="row">
        <div className="col">
          <ViewCategory />
        </div>
        <div className="d-none d-lg-block col-4 border border-danger">
        </div>
      </div> */}
    </>



  );
};

export default Home;
