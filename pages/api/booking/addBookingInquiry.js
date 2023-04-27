import BookingInquiry from "../../../models/BookingInquiry";
import dbconnect from "../../../lib/dbconnect";
import Room from "../../../models/Rooms";
import Cottage from "../../../models/Cottages";

export default async function handler(req, res) {
  const {
    racId,
    type,
    firstName,
    lastName,
    phone,
    email,
    messages,
    fromDate,
    toDate,
  } = req.body;
  await dbconnect();

  let racInquiry = {};
  if (type === "room") {
    racInquiry = await Room.findById(racId);
  }
  if (type === "cottage") {
    racInquiry = await Cottage.findById(racId);
  }

  const newBookingInquiry = new BookingInquiry({
    type,
    firstName,
    lastName,
    phone,
    email,
    messages,
    racInquiry,
    dateSent: new Date(),
    fromDate,
    toDate,
  });
  const result = await newBookingInquiry.save();
  res.json({ result });
}
