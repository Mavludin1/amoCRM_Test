import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import UserPage from "./components/UserPage/UserPage";
import NewsPage from "./components/NewsPage/NewsPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/profile" element={<UserPage />} />
        <Route path="/news/:id" element={<NewsPage />} />
      </Routes>
    </>
  );
}
