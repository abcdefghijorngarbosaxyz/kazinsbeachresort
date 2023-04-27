import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import React, { useState } from "react";

import { Navigation, EffectFade, Autoplay } from "swiper";
import Frame from "../components/Frame";
import Beach from "../mockdata/Beach";
import roomsCottagesImageItems from "../lib/roomsCottagesImageItems";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Home() {
  const roomNavigationPrevRef = React.useRef(null);
  const roomNavigationNextRef = React.useRef(null);
  const beachNavigationPrevRef = React.useRef(null);
  const beachNavigationNextRef = React.useRef(null);
  const [beachCurrentIndex, setBeachCurrentIndex] = useState(0);

  const MapView = () => {
    return (
      <div className="h-full w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.019461165736!2d122.58275581427226!3d11.550461547588522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a589252bb45adf%3A0x4515a37a0e5404ec!2sKazin%E2%80%99s%20Beach%20Resort%2C%20Gugma%20Beach%2C%20Culasi%2C%20Lonoy%2C%20Sapian!5e0!3m2!1sen!2sph!4v1663567007909!5m2!1sen!2sph"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>Kazin&apos;s Beach Resort</title>
      </Head>
      <Frame
        pageTitle="FEEL THE SEA, SUN, AND SAND"
        heroTitle="HERE, A SENSE OF PERSONAL LUXURY ABOUNDS"
        featureImage="/assets/images/featured/hero-0.jpg"
      >
        <section id="startsection">
          <div className="grid h-fit min-h-screen w-full grid-cols-2 gap-x-24 py-24 px-8">
            <div className="col-span-2 h-fit py-12">
              <h1 className="text-3xl font-light tracking-[.2em] lg:text-center">
                THE BEST GETAWAY YOU CAN DREAM OF
              </h1>
            </div>
            <div className="col-span-2 flex h-fit text-base leading-loose lg:col-span-1">
              <div className="hidden h-80 w-40 items-center justify-center lg:flex">
                <h6 className="-rotate-90 whitespace-nowrap tracking-widest text-gray-300">
                  THE RESORT
                </h6>
              </div>
              <div className="flex h-fit w-full flex-col text-lg tracking-wide lg:px-4">
                <p className="leading-loose">
                  Located at Sapian&apos;s Barangay of Lonoy, Kazin&apos;s Beach
                  Resort is a tranquil seaside retreat that unites world-class
                  service with signature Filipino hospitality. Offering an
                  escape from the urban fray and a boutique travel experience
                  that&apos;s unlike any other. Feel the sea, sun, and sand.
                  Enjoy your vacation with your family or partner.
                </p>
                <Link href="/about-us">
                  <a className="group flex w-fit items-center pt-8 hover:underline">
                    <span className="mr-2 block h-[1px] w-3 bg-gray-800 transition-all duration-300 group-hover:mr-0 group-hover:w-0"></span>
                    Know more
                  </a>
                </Link>
              </div>
            </div>
            <div className="relative col-span-2 h-96 w-full lg:col-span-1 lg:w-11/12">
              <Image
                src="/assets/images/sections/resort.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </section>
        <section>
          <div className="h-fit w-full">
            <div className="h-fit w-full py-12">
              <h1 className="text-3xl font-light tracking-[.2em] lg:text-center">
                ROOMS &amp; COTTAGES
              </h1>
            </div>
            <div className="relative h-fit w-full">
              <Swiper
                navigation={{
                  prevEl: roomNavigationPrevRef.current,
                  nextEl: roomNavigationNextRef.current,
                }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl =
                    roomNavigationPrevRef.current;
                  swiper.params.navigation.nextEl =
                    roomNavigationNextRef.current;
                }}
                slidesPerView={2}
                spaceBetween={120}
                centeredSlides={true}
                grabCursor
                modules={[Navigation]}
                className="flex h-128 w-full flex-auto items-center justify-center overflow-scroll"
                loop={true}
              >
                {roomsCottagesImageItems.length > 0 &&
                  roomsCottagesImageItems.map((item, index) => (
                    <SwiperSlide
                      key={index}
                      className="flex h-112 w-full items-center justify-center overflow-visible "
                    >
                      {({ isActive }) => (
                        <div
                          className={`relative h-112 w-full ${
                            isActive ? "scale-110" : "scale-100"
                          } transform transition-all duration-300`}
                        >
                          <Image src={item} layout="fill" objectFit="cover" />
                        </div>
                      )}
                    </SwiperSlide>
                  ))}
              </Swiper>
              <div className="absolute bottom-0 left-0 z-0 h-48 w-full bg-gray-100"></div>
              <div
                ref={roomNavigationPrevRef}
                className="absolute right-3/4 bottom-40 z-10 flex h-16 w-24 items-center justify-center"
              >
                <button className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-100 bg-white">
                  <ChevronLeftIcon className="h-6 w-6"></ChevronLeftIcon>
                </button>
              </div>
              <div
                ref={roomNavigationNextRef}
                className="absolute left-3/4 bottom-40 z-10 flex h-16 w-24 items-center justify-center"
              >
                <button className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-100 bg-white">
                  <ChevronRightIcon className="h-6 w-6"></ChevronRightIcon>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="flex h-40 w-full items-center justify-center bg-gray-100">
            <div className="flex h-full w-1/2 items-center justify-between">
              <div className="text-lg font-medium tracking-widest">
                BOOK NOW AND GET THE BEST PRICES
              </div>
              <Link href="/rooms-and-cottages">
                <a className="group flex items-center text-lg font-semibold tracking-wide">
                  <span className="mr-2 block h-[1px] w-4 bg-gray-800 transition-all duration-300 group-hover:w-0"></span>
                  Discover more
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section>
          <div className="h-fit w-full py-24">
            <div className="grid h-screen w-full grid-cols-2 gap-x-20 py-12 px-8">
              <div className="relative col-span-2 h-128 w-full lg:col-span-1 lg:w-full">
                <div className="absolute top-0 left-0 h-112 w-144 bg-gray-100"></div>
                <Swiper
                  onRealIndexChange={(swiper) =>
                    setBeachCurrentIndex(swiper.realIndex)
                  }
                  speed={300}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  navigation={{
                    prevEl: beachNavigationPrevRef.current,
                    nextEl: beachNavigationNextRef.current,
                  }}
                  effect={"fade"}
                  onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl =
                      beachNavigationPrevRef.current;
                    swiper.params.navigation.nextEl =
                      beachNavigationNextRef.current;
                  }}
                  slidesPerView={1}
                  modules={[Navigation, Autoplay, EffectFade]}
                  loop
                  className="relative top-12 left-12 h-128 w-full cursor-pointer"
                >
                  {Beach.map((item, index) => (
                    <SwiperSlide key={index} className="h-128 w-full">
                      <div className="relative h-128 w-full">
                        <Image src={item} layout="fill" objectFit="cover" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="absolute -right-12 -bottom-28 flex h-16 w-80 items-center justify-between bg-gray-100 px-10">
                  <div ref={beachNavigationPrevRef} className="cursor-pointer">
                    <ChevronLeftIcon className="h-6 w-6"></ChevronLeftIcon>
                  </div>
                  <div className="mb-1 text-xl">
                    {beachCurrentIndex + 1} | {Beach.length}
                  </div>
                  <div ref={beachNavigationNextRef} className="cursor-pointer">
                    <ChevronRightIcon className="h-6 w-6"></ChevronRightIcon>
                  </div>
                </div>
              </div>
              <div className="col-span-2 flex h-fit text-lg lg:col-span-1">
                <div className="flex h-fit w-full flex-col tracking-wide lg:px-16">
                  <h1 className="mt-24 mb-16 text-3xl font-light leading-loose tracking-[.2em]">
                    THE SEA, SUN, &amp; SAND
                  </h1>
                  <p className="leading-loose">
                    Go to a place where you live in the moment and forget about
                    reality. Embrace the beauty and calmness of the beaches.
                  </p>
                </div>
                <div className="jusitfy-center hidden h-screen w-40 items-center lg:flex">
                  <h6 className="rotate-90 whitespace-nowrap tracking-widest text-gray-300">
                    THE BEACH
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Frame>
    </>
  );
}
