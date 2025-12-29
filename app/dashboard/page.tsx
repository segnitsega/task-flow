"use client";

import SideBar from "../components/sidebar";
import MainPage from "../components/mainpage";

const page = () => {
  return (
    <div className="flex h-screen bg-background">
      <SideBar />
      <MainPage />
    </div>
  )
}

export default page