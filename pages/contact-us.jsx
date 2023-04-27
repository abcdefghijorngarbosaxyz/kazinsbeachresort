import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Frame from "../components/Frame";

const MapStyle = [
  {
    featureType: "all",
    elementType: "labels.text",
    stylers: [
      {
        color: "#878787",
      },
    ],
  },
  {
    featureType: "all",
    elementType: "labels.text.stroke",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "landscape",
    elementType: "all",
    stylers: [
      {
        color: "#f9f5ed",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "all",
    stylers: [
      {
        color: "#f5f5f5",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#c9c9c9",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "all",
    stylers: [
      {
        color: "#aee0f4",
      },
    ],
  },
];

const ContactUs = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Kazin&apos;s Beach Resort</title>
      </Head>
      <Frame
        featureImage="/assets/images/featured/hero-0.jpg"
        heroTitle="WE'D LOVE TO HEAR FROM YOU"
        pageTitle="CONTACT US"
      >
        <section>
          <div className="grid h-fit w-full grid-cols-2 gap-x-12 px-8 lg:h-screen">
            <div className="col-span-2 flex h-full items-center text-base leading-loose lg:col-span-1">
              <div className="jusitfy-center hidden h-full w-40 items-center lg:flex">
                <h6 className="-rotate-90 whitespace-nowrap pt-6 tracking-widest text-gray-300">
                  CONTACT
                </h6>
              </div>
              <div className="flex h-fit w-full flex-col text-lg tracking-wide lg:px-4">
                <div className="flex h-fit w-full flex-col tracking-wide lg:px-4">
                  <h1 className="mb-12 text-3xl font-light leading-loose tracking-[.2em]">
                    CONTACT
                  </h1>
                  <p className="leading-loose">
                    Kazin&apos;s Beach Resort<br></br>Gugma Beach, Culasi,
                    Lonoy,<br></br>Sapian, 5816 Capiz, Philippines
                    <br></br>
                    <Link href="tel:+639481234567">
                      <a className="underline">0948 123 4567</a>
                    </Link>
                    ,{" "}
                    <Link href="tel:+639481234567">
                      <a className="underline">0948 123 4567</a>
                    </Link>
                    <br></br>
                    <Link href="mailto:kazinsbeachresort@gmail.com">
                      <a className="underline">kazinsbeachresort@gmail.com</a>
                    </Link>
                  </p>
                </div>
                <Link href="https://goo.gl/maps/Sdh6VhqojkpmFa4i9">
                  <a
                    target="_blank"
                    rel="noopener noreferer"
                    className="group ml-4 flex w-fit items-center pt-8 hover:underline"
                  >
                    <span className="mr-2 block h-[1px] w-3 bg-gray-800 transition-all duration-300 group-hover:mr-0 group-hover:w-0"></span>
                    Open in Google Maps
                  </a>
                </Link>
              </div>
            </div>
            <Link href="https://goo.gl/maps/Sdh6VhqojkpmFa4i9">
              <a
                target="_blank"
                rel="noopener noreferer"
                className="col-span-2 h-96 w-full py-24 lg:col-span-1 lg:h-full lg:w-11/12"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.019534333748!2d122.5849445!3d11.550456299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a589252bb45adf%3A0x4515a37a0e5404ec!2sKazin%E2%80%99s%20Beach%20Resort%2C%20Gugma%20Beach%2C%20Culasi%2C%20Lonoy%2C%20Sapian!5e0!3m2!1sen!2sph!4v1663696525573!5m2!1sen!2sph"
                  className="h-full w-full"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </a>
            </Link>
          </div>
        </section>
      </Frame>
    </>
  );
};

export default ContactUs;
