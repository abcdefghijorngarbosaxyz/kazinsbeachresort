import dbconnect from "../../../lib/dbconnect";
import Cottage from "../../../models/Cottages";

export default async function handler(req, res) {
  const { name, description, price, images } = req.body;

  await dbconnect();

  const newCottage = new Cottage({
    name,
    description,
    price,
    images,
  });

  try {
    const data = await newCottage.save();
    res.status(201).json({ message: "New Cottage added!" });
  } catch (error) {
    res.status(400).json({ error });
  }
}
