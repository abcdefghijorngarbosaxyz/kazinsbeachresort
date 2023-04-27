import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "Room 1A",
  },
  type: {
    type: String,
    default: "room",
  },
  description: {
    type: String,
    default:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aliquid labore iste architecto? Tenetur cumque excepturi tempore quis iste! Maxime harum pariatur magnam rem ea architecto quae omnis, sint tenetur accusamus dolorem hic, iusto blanditiis, fugiat perspiciatis. Itaque iure quidem temporibus quia vero odit fuga nulla praesentium expedita inventore, assumenda, amet totam in, quo laborum aliquid fugiat ab ut reprehenderit? Illum laboriosam temporibus saepe deleniti recusandae, odio excepturi fugit nisi explicabo expedita eum porro laudantium repudiandae corporis tenetur? Tenetur quam deleniti odit cum explicabo, ea odio dicta dolorem vitae reiciendis, recusandae et rem ad sit unde minima corporis inventore sapiente.",
  },
  reservationDate: {
    fromDate: String,
    toDate: String,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  price: {
    type: Number,
    default: 0,
  },
  images: [{ type: String }],
});

export default mongoose.models.Room || mongoose.model("Room", RoomSchema);
