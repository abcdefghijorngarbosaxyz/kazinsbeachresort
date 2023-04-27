import Head from "next/head";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { useState } from "react";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";

const wordDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const wordMonth = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function Reservations() {
  const { step, room } = useRouter().query;

  const [fromDate, setFromDate] = useState(new Date(Date.now()));
  const [toDate, setToDate] = useState(new Date(Date.now()));
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <>
      <Head>
        <title>Reservations - Availability | Kazin&apos;s Beach Resort</title>
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
            <button
              onClick={() =>
                Router.push(
                  {
                    query: {
                      step: "Availability",
                      fromDate: fromDate.toDateString(),
                    },
                  },
                  undefined,
                  {
                    shallow: true,
                  }
                )
              }
            >
              asd
            </button>
          </div>
        </div>
        <div className="flex h-fit w-full space-x-4 px-12 py-8">
          <div className="h-fit w-3/5 border border-sky-800/80">
            <div className="flex h-fit w-full border-b border-sky-800/80">
              <div className="flex h-fit w-1/2 items-center space-x-2 px-8 py-4">
                <CalendarDaysIcon className="h-6 w-6 text-sky-800/80"></CalendarDaysIcon>
                <b className="h-fit w-fit text-base text-sky-800/80">
                  Check-in
                </b>
                <input
                  type={"date"}
                  onChange={(event) => setFromDate(event.target.value)}
                  value={fromDate}
                />
              </div>
              <div className="flex h-fit w-1/2 items-center space-x-2 border-l border-sky-800/80 px-8 py-4">
                <CalendarDaysIcon className="h-6 w-6 text-sky-800/80"></CalendarDaysIcon>
                <b className="h-fit w-fit text-base text-sky-800/80">
                  Check-out
                </b>
                <input
                  type={"date"}
                  onChange={(event) => setToDate(event.target.value)}
                  value={toDate}
                />
              </div>
            </div>
          </div>
          <div className="sticky top-4 right-12 h-fit w-2/5 space-y-4 border border-gray-100 p-4">
            <div className="text-2xl tracking-wide text-sky-800/80">
              YOUR STAY
            </div>
            <div className="flex h-fit w-full">
              <div className="h-fit w-1/2 text-base">
                <b className="h-fit w-full text-base">Check-in</b>
                <div className="h-fit w-full text-base">
                  {`${wordDay[new Date(fromDate).getDay()]}, ${
                    wordMonth[new Date(fromDate).getMonth()]
                  } ${new Date(fromDate).getDate()}, ${new Date(
                    fromDate
                  ).getFullYear()}
                  `}
                </div>
              </div>
              <div className="h-fit w-1/2 text-base">
                <b className="h-fit w-full text-base">Check-out</b>
                <div className="h-fit w-full text-base">
                  {`${wordDay[new Date(toDate).getDay()]}, ${
                    wordMonth[new Date(toDate).getMonth()]
                  } ${new Date(toDate).getDate()}, ${new Date(
                    toDate
                  ).getFullYear()}
                  `}
                </div>
              </div>
            </div>
            <div className="flex h-fit w-full text-base"></div>
            <div className="flex h-fit w-full justify-between border-t border-gray-100 pt-4 text-lg">
              <b>Total:</b>
              <b>Php {parseFloat(totalPrice).toFixed(2)}</b>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
