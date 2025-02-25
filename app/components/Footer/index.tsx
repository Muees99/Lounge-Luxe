"use client";

import cn from "@/app/utils/twcx";
import { FOOTER_LINKS } from "@/app/libs/constant";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
const currentDate = new Date();
  const currentYear = currentDate.getFullYear();


  return (
    <footer className="w-full h-full  pt-5 lg:pt-10 ">
      <div className=" max-w-[1440px] mx-auto sm:px-[5%] px-[4%]">
        <div className="w-full h-full max-container flex flex-col justify-between pb-8">
          <div className="flex flex-col gap-y-5 ">
            <div className="w-full max-[550px]:flex-col flex justify-between lg:justify-start items-center max-[550px]:items-start max-[550px]:gap-y-5">
              <div className="w-full min-[550px]:max-w-[300px] sm:max-w-[380px] lg:hidden ">
                <h2 className="w-[270px] text-[14px] leading-[175%] text-white-100">
                  We prioritize craftsmanship and materials to ensure each chair
                  is built to last. From premium woods to durable upholstery, we
                  select only the finest components, ensuring longevity and
                  resilience.
                </h2>
              </div>
            </div>
            <div className="flex max-[550px]:flex-col max-[550px]:gap-y-7 w-full justify-between items-start [&>ul>span]:text-white-100 [&>ul>span]:text-base [&>ul>span]:font-semibold [&>ul>a]:text-white-100 [&>ul>a]:text-base ">
              <div className="w-full max-w-[380px] hidden lg:block">
                <h2 className="w-[270px] text-[14px] leading-[175%] text-white-100">
                  We prioritize craftsmanship and materials to ensure each chair
                  is built to last. From premium woods to durable upholstery, we
                  select only the finest components, ensuring longevity and
                  resilience.
                </h2>
                <div className="flex items-end mb-4 mt-2">
                  {" "}
                  {/*Flex container for icons */}
                  {/* First icon */}
                  <Link href="https://github.com/Muees99">
                    <FaGithub className="text-white-100 text-2xl mr-4" />{" "}
                  </Link>
                  {/* Second icon */}
                  <Link href="https://twitter.com/Muees__99">
                    <FaXTwitter className="text-white-100 text-2xl mr-4" />{" "}
                  </Link>
                  {/* Third icon */}
                  <Link href="https://www.linkedin.com/in/muees-alabi-77b14b239/">
                    <FaLinkedin className="text-white-100 text-2xl " />{" "}
                  </Link>
                </div>
              </div>

              <ul className="flex flex-col gap-y-5 max-[550px]:gap-y-3">
                <span>Custom Care</span>
                {FOOTER_LINKS.Customercare.map(
                  (link: { id: number; link: string; label: string }) => (
                    <Link
                      href={link.link}
                      key={link.id}
                      className=" hover:font-medium hover:text-primary transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </ul>

              <ul className="flex flex-col gap-y-5 max-[550px]:gap-y-3">
                <span>Services</span>
                {FOOTER_LINKS.services.map(
                  (link: { id: number; link: string; label: string }) => (
                    <Link
                      href={link.link}
                      key={link.id}
                      className={cn(
                        "capitalize hover:font-medium hover:text-primary transition-colors duration-300",
                        {
                          uppercase: link.label === "Services",
                        }
                      )}
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </ul>
              <ul className="flex flex-col gap-y-5 max-[550px]:gap-y-3">
                <span>Accessories</span>
                {FOOTER_LINKS.accessories.map(
                  (link: { id: number; link: string; label: string }) => (
                    <Link
                      href={link.link}
                      key={link.id}
                      className={cn(
                        "capitalize hover:font-medium hover:text-primary transition-colors duration-300",
                        {
                          uppercase: link.label === "accessories",
                        }
                      )}
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </ul>
            </div>
          </div>
          <div className="text-center text-[#fff27b86] text-sm mt-4">
            © Copyright Muees Alabi {currentYear}. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
