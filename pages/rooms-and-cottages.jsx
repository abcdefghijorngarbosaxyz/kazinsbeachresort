import { Scrollspy } from "@makotot/ghostui";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Frame from "../components/Frame";
import RACContainer from "../components/RoomsAndCottages.Container";
import { CakeIcon, InformationCircleIcon } from "@heroicons/react/24/outline";

function RoomsAndCottages() {
  const [merged, setMerged] = useState([]);
  const [cottages, setCottages] = useState([]);
  const [loading, setLoading] = useState(true);
  const itemsRef = useRef([]);
  const childRefs = React.useMemo(
    () => merged.map(() => React.createRef()),
    [merged.join(",")]
  );

  const getCottages = async () => {
    const { data } = await axios.get("/api/roomcottage/getCottages");
    if (data) {
      setCottages(data.cottageList);
    }
  };

  const [rooms, setRooms] = useState([]);

  const getRooms = async () => {
    setLoading(true);
    const { data } = await axios.get("/api/roomcottage/getRooms");
    if (data) {
      setRooms(data.roomList);
    }
    setLoading(false);
  };

  useEffect(() => {
    getRooms();
    getCottages();
  }, []);

  useEffect(() => {
    setMerged(rooms.concat(cottages));
  }, [rooms, cottages]);

  // useEffect(() => {
  //   itemsRef.current = merged.map((_, i) => itemsRef.current[i] || createRef());
  // }, [merged]);

  return (
    <>
      <Head>
        <title>Rooms &amp; Cottages | Kazin&apos;s Beach Resort</title>
      </Head>
      <Frame
        featureImage="/assets/images/featured/hero-3.jpg"
        pageTitle="ROOMS &amp; COTTAGES"
        heroTitle="EXPERIENCE A TRUE FILIPINO HOSPITALITY"
      >
        {loading ? (
          <div className="flex h-screen w-full items-center justify-center">
            <svg
              className="h-8 w-8 animate-spin text-sky-800"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        ) : (
          <Scrollspy sectionRefs={childRefs}>
            {({ currentElementIndexInViewport }) => (
              <div id="startsection" className="flex space-x-8 px-20">
                <div className="sticky top-0 left-0 flex h-fit w-1/3 py-16 text-xl">
                  <div className="hidden h-screen w-1/6 items-center justify-center text-base lg:flex">
                    <h6 className="-rotate-90 whitespace-nowrap tracking-widest text-gray-300">
                      ROOMS &amp; COTTAGES
                    </h6>
                  </div>
                  <div className="ml-8 flex h-fit w-3/4 flex-col">
                    {merged.length > 0 &&
                      merged.map((item, index) => (
                        <Link href={`#${item.name}`}>
                          <a
                            className={`${
                              currentElementIndexInViewport == index &&
                              "bg-gray-100"
                            } w-full p-4`}
                          >
                            <div className="text-sm font-semibold uppercase tracking-widest">
                              {item.name}
                            </div>
                            <div className="text-sm tracking-widest">
                              {item.description}
                            </div>
                          </a>
                        </Link>
                      ))}
                  </div>
                </div>
                <div className="h-fit w-2/3">
                  {merged.length > 0 &&
                    merged.map((item, index) => (
                      <div id={item.name} ref={childRefs[index]} key={index}>
                        <RACContainer RoomCottage={item} />
                      </div>
                    ))}
                </div>
              </div>
            )}
          </Scrollspy>
        )}
        <section>
          <div className="h-fit w-full space-y-12 px-8 py-24">
            <div className="flex h-fit w-full justify-center text-2xl font-light tracking-[0.2em]">
              RESORT SERVICES
            </div>
            <div className="gid-cols-1 grid md:grid-cols-2 lg:grid-cols-3">
              <div className="flex h-48 w-full flex-col items-center justify-start space-y-4 px-12 py-8">
                <div className="flex items-center justify-center rounded-full bg-sky-800/80 p-3">
                  <CakeIcon className="h-5 w-5 text-white"></CakeIcon>
                </div>
                <div className="text-base font-medium uppercase tracking-[0.2em]">
                  room service
                </div>
                <div className="text-center text-sm tracking-widest">
                  Room service available all day, from breakfast to dinner
                </div>
              </div>
              <div className="flex h-48 w-full flex-col items-center justify-start space-y-4 px-16 py-8">
                <div className="flex items-center justify-center rounded-full bg-sky-800/80 p-3">
                  <InformationCircleIcon className="h-5 w-5 text-white"></InformationCircleIcon>
                </div>
                <div className="text-base font-medium uppercase tracking-[0.2em]">
                  CONCIERGE
                </div>
                <div className="text-center text-sm tracking-widest">
                  Recommendations of foods and activities
                </div>
              </div>
            </div>
          </div>
        </section>
      </Frame>
    </>
  );
}

export default RoomsAndCottages;
