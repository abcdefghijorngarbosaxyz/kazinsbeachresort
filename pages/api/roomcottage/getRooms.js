import Room from "../../../models/Rooms";
import dbconnect from "../../../lib/dbconnect";

export default async function handler(req, res) {
  await dbconnect();
  const roomList = await Room.find();
  res.json({ roomList });
}
