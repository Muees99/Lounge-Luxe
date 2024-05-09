"use client";

import { NAVLINKS } from "@/app/libs/constant";
import Image from "next/image";
import cn from "@/app/utils/twcx";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import MobileNav from "../MobileNav";
import { useStateCtx } from "@/app/context/StateContext";
import useWindowHeight from "@/app/hooks/useDimension";
import Button from "@/app/Ui/Button";
import { CiLogin, CiLogout } from "react-icons/ci";

const Navbar = () => {
  const { showMobileMenu, setShowMobileMenu } = useStateCtx();
  const searchParams = useSearchParams().get("path");
  const scrollHeight = useWindowHeight();

  const [isActive, setIsActive] = useState("");
  useEffect(() => {
    if (searchParams) {
      setIsActive(searchParams);
      return;
    }
  }, [searchParams]);

  return (
    <header className="w-full bg-black">
      <nav
        className={cn(
          "max-[500px]:py-2 shadow-lg font-montserrat sm:px-[5%] px-[4%] h-[12vh] flex shadow-slate-800/20 justify-between items-center transition-colors duration-500 max-w-[1440px] mx-auto",
          scrollHeight > 200
            ? "fixed backdrop-blur-xl top-0 left-0 z-50 -translate-y-28 opacity-0 animate-slideDown bg-white-100 py-3 border-b border-gray-200 shadow-md"
            : "md:py-3 py-3",
          {
            "bg-white/60": scrollHeight > 800 && scrollHeight < 4300,
          }
        )}
      >
        <Link
          href="/?path=home"
          className={cn(
            "max-sm:w-[120px] max-[450px]:w-[100px]",
            scrollHeight > 200 ? "w-[120px] " : "w-fit",
            "animate-pulse" // Apply the pulse animation
          )}
        >
          <span className="text-white font-montserrat text-lg lg:text-2xl font-semibold">
            LoungeLuxe
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-x-5 lg:gap-x-7 2xl:gap-x-10">
          {NAVLINKS.map((link) => (
            <Link
              href={
                link.link === "home"
                  ? "/?path=home"
                  : `${link.link}?path=${link.link}`
              }
              key={link.id}
              onClick={() => {
                setIsActive(link.link);
              }}
              className={cn(
                "text-[#b8ae3d] capitalize text-base relative font-medium before:bg-primary-light before:w-[0%] before:h-1 before:absolute before:-bottom-2 before:left-0 before:transition-all before:duration-500",
                isActive === link.link
                  ? "before:w-full text-primary-light"
                  : "",
                "hover:text-[#f4d228e7]"
              )}
            >
              <span className="font-montserrat">{link.label}</span>
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex gap-x-3 xl:gap-x-5">
          <Button
            href="/"
            type="button"
            className="bg-[#262728] hover:bg-[#fff27b86] focus:bg-[#807500] px-4 py-2 rounded-md font-medium text-white"
          >
            Login
            <CiLogin />
          </Button>
          <Button
            href="/"
            type="button"
            className="bg-[#262728] hover:bg-[#fff27b86] focus:bg-[#807500] px-4 py-2 rounded-md font-medium text-white"
          >
            Logout
            <CiLogout />
          </Button>
        </div>

        <div
          tabIndex={0}
          className="lg:hidden text-2xl cursor-pointer focus:border border-primary focus:p-1 focus:rounded-md"
          onClick={() => setShowMobileMenu(true)}
        >
          <FaBars className="text-[#fff27b86]" />
        </div>
        <MobileNav />
      </nav>
    </header>
  );
};

export default Navbar;
