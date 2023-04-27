import Gallery from "../../../models/Gallery";
import dbconnect from "../../../lib/dbconnect";

export default async function handler(req, res) {
  const { category } = req.query;
  await dbconnect();
  const result = await Gallery.find({ type: category });
  res.json({ result });
}
