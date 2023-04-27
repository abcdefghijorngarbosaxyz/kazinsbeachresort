import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState, Fragment } from "react";
import Router, { useRouter } from "next/router";
import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/outline";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { addDays, setDate } from "date-fns";

const BookingStepTwo = () => {
  const router = useRouter();
  const { racId, type } = useRouter().query;

  const [racInfo, setRacInfo] = useState(null);

  const [firstName, setFirstName] = useState("");
  const [firstNameBlank, setFirstNameBlank] = useState(false);
  const [lastName, setLastName] = useState("");
  const [lastNameBlank, setLastNameBlank] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneBlank, setPhoneBlank] = useState(false);
  const [email, setEmail] = useState("");
  const [emailBlank, setEmailBlank] = useState(false);
  const [messages, setMessages] = useState("");

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const [rangeDate, setRangeDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const getRacInfo = async () => {
    const { data } = await axios.post("/api/booking/getRoomCottageInfo", {
      racId,
      type,
    });
    if (data && data.racInfo !== "NOT FOUND") {
      setRacInfo(data.racInfo);
    }
  };

  const handleBookButton = async (event) => {
    event.preventDefault();
    if (firstNameBlank || lastNameBlank || phoneBlank || emailBlank) return;
    setSending(true);
    await axios.post("/api/booking/addBookingInquiry", {
      racId,
      type,
      firstName,
      lastName,
      phone,
      email,
      messages,
      fromDate: rangeDate[0].startDate,
      toDate: rangeDate[0].endDate,
    });
    setSending(false);
    setSent(true);
    alert("Booking inquiry sent!");
    router.push("/");
  };

  useEffect(() => {
    getRacInfo();
  }, [racId, type]);

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
              GUEST DETAILS
            </div>
            <div className="relative mt-4 mr-12 flex items-center px-2">
              <button
                onClick={() => Router.back()}
                className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-full bg-sky-700 text-lg text-white"
              >
                <CheckIcon className="h-6 w-6 font-bold" />
              </button>
              <div className="flex h-10 w-full items-center">
                <div className="h-1 w-full bg-sky-800"></div>
              </div>
              <div className="absolute top-0 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-sky-700 text-xl font-semibold text-white">
                2
              </div>
            </div>
            <div className="mt-2 flex justify-between text-base font-light text-gray-900">
              <div>Select room/cottage</div>
              <div className="font-medium">Guest details</div>
            </div>
          </div>
        </div>
        <div className="-mb-8 mt-8 flex w-full justify-center bg-gray-100">
          <DateRangePicker
            minDate={new Date()}
            onChange={(item) => setRangeDate([item.selection])}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={rangeDate}
            direction="horizontal"
          />
        </div>
        {racInfo != null && (
          <div className="mt-8 flex h-screen w-full space-x-16 p-16">
            <div className="h-fit w-1/3">
              <div className="relative aspect-video h-full w-full">
                <Image
                  src={racInfo.images != undefined && racInfo.images[0]}
                  objectFit="cover"
                  layout="fill"
                />
              </div>
              <div className="space-y-4">
                <h1 className="mt-4 text-3xl font-light uppercase tracking-[.2em]">
                  {racInfo.name}
                </h1>
                <h3 className="text-base font-light uppercase tracking-[.2em]">
                  {racInfo.description}
                </h3>
                <h3 className="text-base font-bold tracking-[.2em]">
                  Php {racInfo.price}.00{" "}
                  <span className="font-normal">/ day</span>
                </h3>
              </div>
            </div>
            <div className="h-fit w-2/3">
              <div className="h-fit w-full text-2xl tracking-[0.2em] text-sky-800/80">
                CONTACT INFO
              </div>
              <div className="flex justify-end text-lg font-light">
                * Required
              </div>
              <form className="grid grid-cols-2 gap-4">
                <div className="col-span-1 h-fit w-full">
                  <input
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    onBlur={() => {
                      if (firstName === "") setFirstNameBlank(true);
                      else setFirstNameBlank(false);
                    }}
                    placeholder="First Name *"
                    className="h-16 w-full border border-sky-900/80 px-4 text-lg focus:outline-none"
                  />
                  {firstNameBlank && (
                    <div className="h-fit w-full bg-red-700 p-2 text-sm text-white">
                      First name is required
                    </div>
                  )}
                </div>
                <div className="col-span-1 h-fit w-full">
                  <input
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                    onBlur={() => {
                      if (lastName === "") setLastNameBlank(true);
                      else setLastNameBlank(false);
                    }}
                    placeholder="Last Name *"
                    className="h-16 w-full border border-sky-900/80 px-4 text-lg focus:outline-none"
                  />
                  {lastNameBlank && (
                    <div className="h-fit w-full bg-red-700 p-2 text-sm text-white">
                      Last name is required
                    </div>
                  )}
                </div>
                <div className="col-span-1 h-fit w-full">
                  <input
                    type="tel"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    onBlur={() => {
                      if (phone === "") setPhoneBlank(true);
                      else setPhoneBlank(false);
                    }}
                    placeholder="Phone/Email Address/Messenger *"
                    className="h-16 w-full border border-sky-900/80 px-4 text-lg focus:outline-none"
                  />
                  {phoneBlank && (
                    <div className="h-fit w-full bg-red-700 p-2 text-sm text-white">
                      Contact Option is required
                    </div>
                  )}
                </div>
                <div className="col-span-2 h-fit w-full">
                  <div className="my-4 h-fit w-full text-2xl tracking-[0.2em] text-sky-800/80">
                    ADDITIONAL DETAILS AND PREFERENCES
                  </div>
                  <textarea
                    value={messages}
                    onChange={(event) => setMessages(event.target.value)}
                    className="h-40 w-full border border-sky-900/80 p-4 text-lg focus:outline-none"
                  ></textarea>
                </div>
                <div className="col-span-2 flex h-fit w-full justify-center pb-16">
                  <button
                    type="submit"
                    onClick={handleBookButton}
                    className={`h-16 w-72 ${
                      sent && !sending
                        ? "bg-green-800/80"
                        : !sending && "bg-sky-800/80"
                    } py-4 text-lg font-light text-white hover:bg-gray-800`}
                  >
                    {sending && (
                      <div className="flex h-8 w-full items-center justify-center">
                        <svg
                          className="h-8 w-8 animate-spin text-white"
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
                    )}
                    {sent && !sending
                      ? "BOOKING COMPLETE"
                      : !sending && "COMPLETE BOOKING"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BookingStepTwo;
