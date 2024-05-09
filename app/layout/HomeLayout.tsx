"use client";
import React, { useEffect, useState } from "react";
import { FiLoader } from "react-icons/fi";
import Navbar from "../components/Navs/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate a 1 second loading time
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <FiLoader className="animate-spin h-12 w-12 text-yellow-400" />
      </div>
    );
  }
  return(
    <>
    <Navbar/>
    <Hero/>
    <Footer/>

  </>

  ) ;
  
}
