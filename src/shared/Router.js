import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainPage from "../pages/mainpage/MainPage";
import ReviewPage from "../pages/reviewpage/ReviewPage";
import Mypage from "../pages/mypage/Mypage";
// import MainMap from "../pages/MainMap";

import PostForm from "../pages/communitypage/PostForm";
import PostList from "../pages/communitypage/PostList";
import PostDetail from "../pages/communitypage/PostDetail";
import PostEdit from "../pages/communitypage/PostEdit";

import ScrollToTop from "./ScrollToTop";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/map" element={<MainMap />} /> */}
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/post" element={<PostForm />} />
        <Route path="/list" element={<PostList />} />
        <Route path="/:postId" element={<PostDetail />} />
        <Route path="/edit/:postId" element={<PostEdit />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
