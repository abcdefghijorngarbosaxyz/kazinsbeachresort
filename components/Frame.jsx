import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Transition } from "@headlessui/react";
import { useRouter, Router } from "next/router";

export default function Frame({
  children,
  featureImage,
  pageTitle,
  heroTitle,
}) {
  const [showNavBar, setShowNavBar] = useState(true);
  // const controlNavBar = () => {
  //   if (window.scrollY > 200) {
  //     setShowNavBar(true);
  //   } else setShowNavBar(false);
  // };
  // useEffect(() => {
  //   if (Router.pathname !== "/") {
  //     setShowNavBar(true);
  //   }
  //   window.addEventListener("scroll", controlNavBar);
  //   return () => {
  //     window.removeEventListener("scroll", controlNavBar);
  //   };
  // }, []);

  const Navigation = ({ dark }) => {
    return (
      <div
        className={`flex h-full w-full items-center justify-center space-x-8 pt-2 ${
          dark ? "text-gray-800" : "text-gray-100"
        }`}
      >
        <Link href="/rooms-and-cottages">
          <a className="group flex flex-col items-center space-y-1">
            <span className="tracking-[.2em]">ROOMS &amp; COTTAGES</span>
            <span
              className={`block h-[1px] w-0 ${
                dark ? "bg-gray-800" : "bg-gray-100"
              } transition-all duration-500 group-hover:w-full`}
            ></span>
          </a>
        </Link>
        <Link href="/gallery">
          <a className="group flex flex-col items-center space-y-1">
            <span className="tracking-[.2em]">GALLERY</span>
            <span
              className={`block h-[1px] w-0 ${
                dark ? "bg-gray-800" : "bg-gray-100"
              } transition-all duration-500 group-hover:w-full`}
            ></span>
          </a>
        </Link>
        <Link href="/contact-us">
          <a className="group flex flex-col items-center space-y-1">
            <span className="tracking-[.2em]">CONTACT</span>
            <span
              className={`block h-[1px] w-0 ${
                dark ? "bg-gray-800" : "bg-gray-100"
              } transition-all duration-500 group-hover:w-full`}
            ></span>
          </a>
        </Link>

        <Link href="/about-us">
          <a className="group flex flex-col items-center space-y-1">
            <span className="tracking-[.2em]">ABOUT US</span>
            <span
              className={`block h-[1px] w-0 ${
                dark ? "bg-gray-800" : "bg-gray-100"
              } transition-all duration-500 group-hover:w-full`}
            ></span>
          </a>
        </Link>
        <Link
          passHref
          target="_blank"
          href="https://www.google.com/maps/dir//''/@11.5505383,122.5499248,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x33a589252bb45adf:0x4515a37a0e5404ec!2m2!1d122.5849445!2d11.5504563!3e0?hl=en"
        >
          <a
            target="_blank"
            rel="noopener noreferer"
            className="group flex flex-col items-center space-y-1"
          >
            <span className="tracking-[.2em]">GET DIRECTIONS</span>
            <span
              className={`block h-[1px] w-0 ${
                dark ? "bg-gray-800" : "bg-gray-100"
              } transition-all duration-500 group-hover:w-full`}
            ></span>
          </a>
        </Link>
        <Link href="https://web.facebook.com/kazinsbeachresort">
          <a className="group flex flex-col items-center space-y-1">
            <span className="tracking-[.2em]">FACEBOOK</span>
            <span
              className={`block h-[1px] w-0 ${
                dark ? "bg-gray-800" : "bg-gray-100"
              } transition-all duration-500 group-hover:w-full`}
            ></span>
          </a>
        </Link>
      </div>
    );
  };

  return (
    <div className="h-fit w-full">
      <div className="fixed top-0 left-0 z-50 h-fit w-full">
        <Transition
          show={showNavBar}
          enter="transition duration-300 ease-in-out"
          enterFrom="transform opacity-0"
          enterTo="transform opacity-100"
          leave="transition duration-75 ease-in-out"
          leaveFrom="transform opacity-100"
          leaveTo="transform opacity-0"
        >
          <div
            className={`flex h-14 w-full justify-between border-b border-b-gray-300 bg-gray-100`}
          >
            <Link href="/">
              <a className="group relative h-14 w-48">
                <div className="relative z-40 my-2 h-10">
                  <Image
                    src="/assets/images/logo.png"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <div className="absolute top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-gray-800 text-xs font-medium tracking-widest text-gray-100 opacity-0 group-hover:opacity-100">
                  HOME
                </div>
              </a>
            </Link>
            <Navigation dark />
            <Link href="/booking">
              <a className="group relative h-14 w-48">
                <div className="absolute top-0 right-0 z-50 flex h-full w-full items-center justify-center bg-sky-800/80 text-xs font-medium tracking-widest text-gray-100 group-hover:bg-gray-800">
                  BOOK
                </div>
              </a>
            </Link>
          </div>
        </Transition>
      </div>
      {useRouter().pathname === "/" && (
        <div className="h-screen w-full">
          <div className="fixed top-0 left-0 -z-50 h-screen w-full">
            <Image src={featureImage} layout="fill" objectFit="cover" />
          </div>
          <div className="h-screen w-full bg-black/50 px-10">
            {/* <div className="flex h-32 w-full items-center justify-between">
              <div className="h-fit w-56"></div>
              <Link href="/">
                <a className="flex h-full w-full flex-col items-center justify-center font-italiana text-white">
                  <span className="text-[.75em] tracking-widest">
                    GUGMA BEACH
                  </span>
                  <span className="text-4xl tracking-[0.2em]">
                    KAZIN&apos;S
                  </span>
                  <span className="text-sm tracking-widest">BEACH RESORT</span>
                </a>
              </Link>
              <Link href="/booking">
                <a className="h-fit w-56 border border-white py-5 text-center text-[1.25em] font-light tracking-[0.2em] text-white hover:bg-white/25">
                  BOOK NOW
                </a>
              </Link>
            </div> */}
            {/* <div
              className={`sticky top-0 left-0 flex h-14 w-full transform items-center justify-center space-x-8 pt-2 text-white`}
            >
              <Link href="/rooms-and-cottages">
                <a className="group flex flex-col items-center space-y-1">
                  <span className="tracking-[.2em]">ROOMS &amp; COTTAGES</span>
                  <span
                    className={`block h-[1px] w-0 bg-white transition-all duration-500 group-hover:w-full`}
                  ></span>
                </a>
              </Link>
              <Link href="/gallery">
                <a className="group flex flex-col items-center space-y-1">
                  <span className="tracking-[.2em]">GALLERY</span>
                  <span
                    className={`block h-[1px] w-0 bg-white transition-all duration-500 group-hover:w-full`}
                  ></span>
                </a>
              </Link>
              <Link href="/contact-us">
                <a className="group flex flex-col items-center space-y-1">
                  <span className="tracking-[.2em]">CONTACT</span>
                  <span
                    className={`block h-[1px] w-0 bg-white transition-all duration-500 group-hover:w-full`}
                  ></span>
                </a>
              </Link>
              <Link href="/about-us">
                <a className="group flex flex-col items-center space-y-1">
                  <span className="tracking-[.2em]">ABOUT US</span>
                  <span
                    className={`block h-[1px] w-0 bg-white transition-all duration-500 group-hover:w-full`}
                  ></span>
                </a>
              </Link>

              <Link
                passHref
                target="_blank"
                href="https://www.google.com/maps/dir//''/@11.5505383,122.5499248,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x33a589252bb45adf:0x4515a37a0e5404ec!2m2!1d122.5849445!2d11.5504563!3e0?hl=en"
              >
                <a
                  target="_blank"
                  rel="noopener noreferer"
                  className="group flex flex-col items-center space-y-1"
                >
                  <span className="tracking-[.2em]">GET DIRECTIONS</span>
                  <span
                    className={`block h-[1px] w-0 bg-white transition-all duration-500 group-hover:w-full`}
                  ></span>
                </a>
              </Link>
              <Link href="https://web.facebook.com/kazinsbeachresort">
                <a className="group flex flex-col items-center space-y-1">
                  <span className="tracking-[.2em]">FACEBOOK</span>
                  <span
                    className={`block h-[1px] w-0 bg-white transition-all duration-500 group-hover:w-full`}
                  ></span>
                </a>
              </Link>
            </div> */}
            <div className="flex h-full w-full flex-col items-center justify-between">
              {/* <h3 className="mt-48 text-sm tracking-[.2em] text-white">
                {pageTitle}
              </h3>
              <div className="h-fit w-full px-16 text-center font-italiana text-3xl font-light tracking-[.2em] text-white lg:px-40 lg:text-5xl lg:font-bold">
                <p className="leading-loose">{heroTitle}</p>
              </div> */}

              <div className="mt-72 flex h-32 w-fit flex-col items-center justify-center font-italiana text-white">
                <span className="text-4xl tracking-widest">GUGMA BEACH</span>
                <span className="text-9xl font-bold tracking-[0.5em]">
                  KAZIN&apos;S
                </span>
                <span className="text-4xl tracking-widest">BEACH RESORT</span>
              </div>
              <Link href="#startsection">
                <a
                  id="scrolltostart"
                  className="flex h-fit w-fit flex-col items-center pt-12 opacity-0 lg:opacity-100"
                >
                  <h3 className="font-light tracking-[.2em] text-white">
                    SCROLL DOWN
                  </h3>
                  <div className="relative mb-4 mt-4 flex h-fit w-6 items-center">
                    <span className="box-border h-10 w-5 rounded-full border-2 border-white/75 before:absolute before:top-2 before:left-2 before:box-border before:h-1 before:w-1 before:rounded-full before:bg-white/75"></span>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      )}
      <div className="h-fit w-full bg-white">{children}</div>
      <footer>
        <div className="-mb-14 flex h-40 w-full items-center justify-center border-b border-b-gray-300 bg-gray-100">
          <div className="flex h-fit w-full flex-col items-center justify-center space-y-6 lg:flex-row lg:space-y-0 lg:space-x-10">
            <div className="w-fit text-sm tracking-wide">
              Have any questions in mind?
            </div>
            <Link href="/contact-us">
              <a className="box-border block bg-gray-800 py-4 px-6 text-xs font-light tracking-[2.5px] text-gray-100">
                GET IN TOUCH
              </a>
            </Link>
          </div>
        </div>
        <div className="h-fit w-full bg-gray-100 pt-14 lg:h-screen">
          <div className="mx-8 -mt-1 grid h-fit grid-cols-2 items-center justify-center border-t border-t-gray-300 py-12 lg:mx-16 lg:h-1/2">
            <div className="col-span-2 h-full px-8 lg:col-span-1">
              <div className="relative h-24 w-full">
                <Image
                  src="/assets/images/logo.png"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="mt-12 flex flex-col items-center space-y-2 text-xs tracking-widest">
                <Link href="https://goo.gl/maps/qEUQYJuh8tfnce9Z9">
                  <a className="hover:underline">
                    GUGMA BEACH, SAPIAN, CAPIZ 5816
                  </a>
                </Link>
                <div>
                  <Link href="tel:+639481234567">
                    <a className="hover:underline">0948 123 4567</a>
                  </Link>
                  ,{" "}
                  <Link href="tel:+639481234567">
                    <a className="hover:underline">0948 123 4567</a>
                  </Link>
                </div>
                <Link href="mailto:kazinsbeachresort@gmail.com">
                  <a className="hover:underline">KAZINSBEACHRESORT@GMAIL.COM</a>
                </Link>
              </div>
            </div>
            <div className="col-span-2 flex h-full flex-col items-center justify-between space-y-8 px-8 pt-12 text-xs font-light tracking-widest lg:col-span-1 lg:items-start lg:pt-0">
              <Link href="/rooms-and-cottages">
                <a className="hover:underline">ROOMS &amp; COTTAGES</a>
              </Link>
              <Link href="/gallery">
                <a className="hover:underline">GALLERY</a>
              </Link>
              <Link href="/contact-us">
                <a className="hover:underline">CONTACT</a>
              </Link>
              <Link href="/about-us">
                <a className="hover:underline">ABOUT US</a>
              </Link>
              <Link
                passHref
                target="_blank"
                href="https://www.google.com/maps/dir//''/@11.5505383,122.5499248,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x33a589252bb45adf:0x4515a37a0e5404ec!2m2!1d122.5849445!2d11.5504563!3e0?hl=en"
              >
                <a target="_blank" className="hover:underline">
                  GET DIRECTIONS
                </a>
              </Link>
            </div>
          </div>
          <div className="mx-8 flex h-fit flex-col border-t border-t-gray-300 lg:mx-16 lg:h-1/2">
            <div className="flex h-40 w-full items-center justify-center lg:h-3/5">
              <div className="flex w-fit flex-col items-center space-y-4">
                <h6 className="text-sm tracking-wide">
                  Find Kazin&apos;s Beach Resort on social networks
                </h6>
                <div className="flex h-fit w-fit justify-between space-x-8">
                  <Link href="https://web.facebook.com/kazinsbeachresort">
                    <a className="w-10 rounded-md p-2 text-center text-xl text-gray-600 hover:bg-gray-200">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                  </Link>
                  <Link href="https://web.facebook.com/kazinsbeachresort">
                    <a className="w-10 rounded-md p-2 text-center text-xl text-gray-600 hover:bg-gray-200">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </Link>
                  <Link href="https://web.facebook.com/kazinsbeachresort">
                    <a className="w-10 rounded-md p-2 text-center text-xl text-gray-600 hover:bg-gray-200">
                      <FontAwesomeIcon icon={faYoutube} />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex h-24 justify-center border-t border-t-gray-300 pt-12 text-sm text-gray-600 lg:h-1/5">
              2023 KAZIN&apos;S BEACH RESORT. ALL RIGHTS RESERVED.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
