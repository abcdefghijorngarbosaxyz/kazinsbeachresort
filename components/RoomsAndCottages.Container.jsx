import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Navigation, EffectFade } from "swiper";
import Link from "next/link";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import moment from "moment-timezone";

moment.tz.setDefault("Asia/Manila");

function RACContainer({ RoomCottage }) {
  const racNavigationPrevRef = useRef(null);
  const racNavigationNextRef = useRef(null);
  const [racCurrentIndex, setRacCurrentIndex] = useState(0);

  const now = moment();

  return (
    <div className="h-fit w-full">
      <div className="h-fit w-full py-16">
        <div>
          <h1 className="text-3xl font-light uppercase tracking-[.2em]">
            {RoomCottage.name}
          </h1>
          <br></br>
          <h3 className="mb-8 text-base font-light uppercase tracking-[.2em]">
            {RoomCottage.description}
          </h3>
        </div>
        <Swiper
          onRealIndexChange={(swiper) => setRacCurrentIndex(swiper.realIndex)}
          speed={300}
          navigation={{
            prevEl: racNavigationPrevRef.current,
            nextEl: racNavigationNextRef.current,
          }}
          effect={"fade"}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = racNavigationPrevRef.current;
            swiper.params.navigation.nextEl = racNavigationNextRef.current;
          }}
          slidesPerView={1}
          modules={[Navigation, EffectFade]}
          loop
          className="relative h-128 w-full cursor-pointer"
        >
          {RoomCottage.images.length > 0 &&
            RoomCottage.images.map((item, index) => (
              <SwiperSlide key={index} className="relative h-128 w-full">
                <Image src={item} layout="fill" objectFit="cover" />
                {!RoomCottage.isAvailable &&
                  now.isBetween(
                    moment(RoomCottage.reservationDate.fromDate),
                    moment(RoomCottage.reservationDate.toDate)
                  ) && (
                    <div
                      className={`group absolute top-0 left-0 flex h-128 w-full items-center justify-center`}
                    >
                      <div className="flex h-full w-full flex-col items-center justify-center bg-black/50 text-lg text-white">
                        UNAVAILABLE RIGHT NOW
                        <DateRange
                          onChange={() => null}
                          months={2}
                          direction="horizontal"
                          showMonthAndYearPickers={false}
                          showMonthArrow={false}
                          showPreview={false}
                          showDateDisplay={false}
                          rangeColors={["#ff0000"]}
                          ranges={[
                            {
                              startDate: new Date(
                                RoomCottage.reservationDate.fromDate
                              ),
                              endDate: new Date(
                                RoomCottage.reservationDate.toDate
                              ),
                            },
                          ]}
                        />
                      </div>
                    </div>
                  )}
              </SwiperSlide>
            ))}
        </Swiper>
        <div className="flex h-12 w-full justify-end px-8">
          <div className="flex h-full w-72 items-center justify-between bg-gray-100 px-8">
            <div ref={racNavigationPrevRef} className="cursor-pointer">
              <ChevronLeftIcon className="h-6 w-6"></ChevronLeftIcon>
            </div>
            <div className="mb-1 text-base">
              {racCurrentIndex + 1} | {RoomCottage.images.length}
            </div>
            <div ref={racNavigationNextRef} className="cursor-pointer">
              <ChevronRightIcon className="h-6 w-6"></ChevronRightIcon>
            </div>
          </div>
        </div>
      </div>
      <div className="h-fit w-full">
        {!RoomCottage.isAvailable &&
        now.isBetween(
          moment(RoomCottage.reservationDate.fromDate),
          moment(RoomCottage.reservationDate.toDate)
        ) ? (
          <div className="group flex w-fit cursor-pointer items-center text-sm font-medium text-gray-400 hover:underline">
            <span className="mr-2 block h-[1px] w-3 bg-gray-400 transition-all duration-300 group-hover:mr-0 group-hover:w-0"></span>
            Unavailable now
          </div>
        ) : (
          <Link
            href={`/booking/step-two?racId=${RoomCottage._id}&type=${RoomCottage.type}`}
          >
            <a className="group flex w-fit items-center text-sm font-medium hover:underline">
              <span className="mr-2 block h-[1px] w-3 bg-gray-800 transition-all duration-300 group-hover:mr-0 group-hover:w-0"></span>
              Book this {RoomCottage.type}
            </a>
          </Link>
        )}
      </div>
    </div>
  );
}

export default RACContainer;
