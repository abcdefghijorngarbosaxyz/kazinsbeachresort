import dbconnect from "../../../lib/dbconnect";
import Room from "../../../models/Rooms";

export default async function handler(req, res) {
  const { name, description, price, images } = req.body;

  await dbconnect();

  const newRoom = new Room({
    name,
    description,
    price,
    images,
  });

  try {
    const data = await newRoom.save();
    res.status(201).json({ message: "New room added!" });
  } catch (error) {
    res.status(400).json({ error });
  }
}
