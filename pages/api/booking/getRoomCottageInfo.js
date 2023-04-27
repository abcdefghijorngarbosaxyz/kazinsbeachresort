import Room from "../../../models/Rooms";
import Cottage from "../../../models/Cottages";
import dbconnect from "../../../lib/dbconnect";

export default async function handler(req, res) {
  const { racId, type } = req.body;
  await dbconnect();

  if (type === "room") {
    const racInfo = await Room.findById(racId);
    return res.json({ racInfo });
  }
  if (type === "cottage") {
    const racInfo = await Cottage.findById(racId);
    return res.json({ racInfo });
  }
  return res.json({ racInfo: "Not Found" });
}
