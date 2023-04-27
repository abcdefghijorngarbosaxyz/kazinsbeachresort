import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import Frame from "../components/Frame";
import { useRouter } from "next/router";
import axios from "axios";

import GalleryThumbs from "../components/Gallery.Thumbs";

export default function Gallery() {
  const router = useRouter();
  const { query } = router;
  const [images, setImages] = useState([]);
  const [showCarousel, setShowCarousel] = useState(false);

  const sendCarouselState = (showCarousel) => {
    setShowCarousel(showCarousel);
  };

  const getImages = async () => {
    setImages([]);
    const { data } = await axios.get(
      `/api/gallery/getImages?category=${query.category}`
    );
    if (data && data.result) {
      console.log(data.result);
      setImages(data.result);
    }
  };

  useEffect(() => {
    query.category ? getImages() : router.push("?category=rooms");
  }, [query.category]);

  return (
    <>
      <Head>
        <title>Photo Gallery | Kazin&apos;s Beach Resort</title>
      </Head>
      <Frame
        featureImage="/assets/images/featured/hero-2.jpg"
        heroTitle="THE MOST BEAUTIFUL PICTURES OF KAZIN'S BEACH RESORT"
        pageTitle="PHOTO GALLERY"
      >
        <section id="startsection" className="relative h-fit w-full">
          <div className="flex flex-col items-center justify-center pt-24 pb-12">
            <h1 className="py-12 text-3xl font-light tracking-[.2em]">
              PHOTOS BY CATEGORY
            </h1>
            <div className="grid grid-cols-2 gap-8 px-16 lg:grid-cols-4 lg:px-80">
              <Link href="?category=rooms#startsection">
                <a
                  className={`col-span-1 border border-gray-800 px-8 py-4 text-center tracking-widest ${
                    query.category === "rooms" && "bg-gray-800 text-white"
                  }`}
                >
                  ROOMS
                </a>
              </Link>
              <Link href="?category=cottages#startsection">
                <a
                  className={`col-span-1 border border-gray-800 px-8 py-4 text-center tracking-widest ${
                    query.category === "cottages" && "bg-gray-800 text-white"
                  }`}
                >
                  COTTAGES
                </a>
              </Link>
              <Link href="?category=nature#startsection">
                <a
                  className={`col-span-1 border border-gray-800 px-8 py-4 text-center tracking-widest ${
                    query.category === "nature" && "bg-gray-800 text-white"
                  }`}
                >
                  NATURE
                </a>
              </Link>
              <Link href="?category=moments#startsection">
                <a
                  className={`col-span-1 border border-gray-800 px-8 py-4 text-center tracking-widest ${
                    query.category === "moments" && "bg-gray-800 text-white"
                  }`}
                >
                  MOMENTS
                </a>
              </Link>
            </div>
          </div>
          <div className="h-fit w-full columns-1 gap-8 px-4 lg:columns-3 lg:px-16">
            {images &&
              images.length > 0 &&
              images.map((item) => (
                <figure key={item._id}>
                  <button onClick={() => setShowCarousel(false)}>
                    <div className="group relative mb-8">
                      <img
                        className="relative z-0"
                        src={item.image}
                        alt="image"
                      />
                      <div className="absolute bottom-0 left-0 z-10 flex h-full w-full transform items-center justify-center bg-black/40 opacity-0 transition-all duration-100 ease-in group-hover:opacity-100">
                        <figcaption className="text-base font-medium tracking-widest text-white">
                          &nbsp;
                        </figcaption>
                      </div>
                    </div>
                  </button>
                </figure>
              ))}
          </div>
          <div className="flex h-fit w-full items-center justify-center py-24">
            {images.length > 0 && (
              <button className="border border-gray-800 p-4 text-sm tracking-widest hover:bg-gray-800 hover:text-white">
                LOAD MORE
              </button>
            )}
          </div>
          <div
            className={`fixed top-0 left-0 z-50 h-screen w-full bg-black/80 text-white ${
              showCarousel ? "flex" : "hidden"
            }`}
          >
            <GalleryThumbs images={images} sendShowState={sendCarouselState} />
          </div>
        </section>
      </Frame>
    </>
  );
}
