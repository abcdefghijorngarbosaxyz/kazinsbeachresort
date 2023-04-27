import Head from "next/head";
import Link from "next/link";
import { useState, useEffect, lazy } from "react";
import axios from "axios";
import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/outline";
import RangeCalendar from "../../components/RangeCalendar";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { addDays, setDate } from "date-fns";
import moment from "moment-timezone";
import { DateRange } from "react-date-range";

moment.tz.setDefault("Asia/Manila");

const Booking = () => {
  const [merged, setMerged] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [cottages, setCottages] = useState([]);
  const [loading, setLoading] = useState(true);

  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const now = moment();

  const getCottages = async () => {
    const { data } = await axios.get("/api/roomcottage/getCottages");
    if (data) {
      setCottages(data.cottageList);
    }
  };

  const getRooms = async () => {
    const { data } = await axios.get("/api/roomcottage/getRooms");
    if (data) {
      setRooms(data.roomList);
    }
  };

  useEffect(() => {
    setLoading(true);
    getRooms();
    getCottages();
  }, []);

  useEffect(() => {
    setMerged(rooms.concat(cottages));
    merged.length > 0 && setLoading(false);
  }, [rooms, cottages]);

  return (
    <>
      <Head>
        <title>Booking Inquiry | Kazin&apos;s Beach Resort</title>
      </Head>
      <div className="h-fit w-full">
        <div className="flex h-40 w-full flex-col items-center justify-center bg-gray-100">
          <Link href="/">
            <a className="flex h-32 w-fit flex-col items-center justify-center font-italiana text-black">
              <span className="text-[.75em] tracking-widest">GUGMA BEACH</span>
              <span className="text-4xl tracking-[0.2em]">KAZIN&apos;S</span>
              <span className="text-sm tracking-widest">BEACH RESORT</span>
            </a>
          </Link>
          <div className="flex h-8 w-full justify-center space-x-8">
            <Link href="tel:+639481234567">
              <a className="text-base">0948 123 4567</a>
            </Link>
            <Link href="tel:+639481234567">
              <a className="text-base">0948 123 4567</a>
            </Link>
            <Link href="mailto:kazinsbeachresort@gmail.com">
              <a className="text-base">kazinsbeachresort@gmail.com</a>
            </Link>
          </div>
        </div>
        <div className="flex h-fit w-full justify-center pt-8">
          <div className="h-fit w-full max-w-md">
            <div className="h-fit w-full text-2xl tracking-[0.2em] text-gray-800">
              SELECT
            </div>
            <div className="relative mt-4 mr-12 flex items-center px-2">
              <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-full bg-sky-700 text-lg text-white">
                1
              </div>
              <div className="flex h-10 w-full items-center">
                <div className="h-1 w-full bg-gray-200"></div>
              </div>
              <div className="absolute top-0 right-0 flex h-10 w-10 items-center justify-center rounded-full border bg-white text-xl font-semibold text-gray-500">
                2
              </div>
            </div>
            <div className="mt-2 flex justify-between text-base font-light text-gray-900">
              <div className="font-medium">Select room/cottage</div>
              <div>Guest details</div>
            </div>
          </div>
        </div>
        <div className="mt-8 h-fit w-full px-16">
          {loading ? (
            <div className="flex h-40 w-full items-center justify-center">
              <svg
                className="h-8 w-8 animate-spin text-sky-800"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>
          ) : (
            <div className="flex h-fit w-full justify-center">
              <div className="h-fit w-full space-y-4">
                {merged.length > 0 &&
                  merged.map((item, index) => (
                    <div className="flex h-fit w-full pt-16">
                      <div className="h-fit w-1/3">
                        <div className="relative aspect-video h-full w-full">
                          <Image
                            src={item.images[0]}
                            lazy
                            layout="fill"
                            objectFit="cover"
                          />
                          {!item.isAvailable &&
                            now.isBetween(
                              moment(item.reservationDate.fromDate),
                              moment(item.reservationDate.toDate)
                            ) && (
                              <div className="absolute top-0 left-0 flex aspect-video h-full w-full items-center justify-center bg-black/75 text-sm text-white">
                                Unavailable right now
                              </div>
                            )}
                        </div>
                        <div className="h-fit w-full">
                          <div>
                            <h3 className="mt-2 text-base font-light uppercase tracking-[.2em]">
                              {item.description}
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="ml-4 w-2/3 space-y-4">
                        <h1 className="mt-2 text-2xl font-light uppercase tracking-[.2em] text-sky-800/80">
                          {item.name}
                        </h1>
                        <div className="text-base">Active bookings</div>
                        <div className="text-sm">
                          {!item.isAvailable &&
                          now.isBetween(
                            moment(item.reservationDate.fromDate),
                            moment(item.reservationDate.toDate)
                          ) ? (
                            <div className="text-red-700">
                              Unavailable from:&nbsp;
                              {new Date(
                                item.reservationDate.fromDate
                              ).toLocaleDateString("en-PH")}
                              &nbsp; to:&nbsp;
                              {new Date(
                                item.reservationDate.toDate
                              ).toLocaleDateString("en-PH")}
                            </div>
                          ) : (
                            <div className="flex items-center text-green-700">
                              None&nbsp; <CheckIcon className="h-4 w-4" />
                            </div>
                          )}
                        </div>
                        <div>
                          {!item.isAvailable &&
                            now.isBetween(
                              moment(item.reservationDate.fromDate),
                              moment(item.reservationDate.toDate)
                            ) && (
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
                                      item.reservationDate.fromDate
                                    ),
                                    endDate: new Date(
                                      item.reservationDate.toDate
                                    ),
                                  },
                                ]}
                              />
                            )}
                        </div>
                        <div className="flex h-fit w-full flex-col items-end justify-center border-t border-b border-sky-500/25 py-4">
                          <div className="w-full">
                            <h3 className="w-fit border border-black px-4 py-2 text-3xl font-bold tracking-[.2em]">
                              Php {item.price}.00{" "}
                              <span className="font-normal">/ day</span>
                            </h3>
                          </div>
                          {!item.isAvailable &&
                          now.isBetween(
                            moment(item.reservationDate.fromDate),
                            moment(item.reservationDate.toDate)
                          ) ? (
                            <button
                              disabled
                              className="mt-4 w-fit bg-gray-300/80 px-4 py-2 text-lg font-light text-white line-through"
                            >
                              BOOK NOW
                            </button>
                          ) : (
                            <Link
                              href={`/booking/step-two?racId=${item._id}&type=${item.type}`}
                            >
                              <a className="mt-4 w-fit bg-sky-800/80 px-4 py-2 text-lg font-light text-white hover:bg-gray-800">
                                BOOK NOW
                              </a>
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Booking;
