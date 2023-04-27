import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { isWithinInterval, startOfDay, endOfDay, parse } from "date-fns";

function highlightDates({ date, view, startDate, endDate }) {
  const parsedStartDate = parse(startDate, "M/d/yyyy", new Date());
  const parsedEndDate = parse(endDate, "M/d/yyyy", new Date());
  if (view === "month") {
    const day = date.getDate();
    const isHighlighted = isWithinInterval(date, {
      start: startOfDay(parsedStartDate),
      end: endOfDay(parsedEndDate),
    });

    return (
      <div
        className={`-mt-6 flex h-8 w-full items-center justify-center ${
          isHighlighted ? "bg-red-500 text-white" : "hidden"
        }`}
      ></div>
    );
  }
}

const MemoizedCalendar = React.memo(Calendar);

export default function RangeCalendar({ startDate, endDate }) {
  return (
    <div>
      <MemoizedCalendar
        className="rounded-lg bg-white shadow-md"
        tileContent={(props) =>
          highlightDates({ ...props, startDate, endDate })
        }
        tileClassName="text-center"
      />
    </div>
  );
}
