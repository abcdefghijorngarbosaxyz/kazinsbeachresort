import Cottage from "../../../models/Cottages";
import dbconnect from "../../../lib/dbconnect";

export default async function handler(req, res) {
  await dbconnect();
  const cottageList = await Cottage.find();
  res.json({ cottageList });
}
