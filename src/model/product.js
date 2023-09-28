import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  newsproduct: {
    type: String,
  },
  productTitle: {
    type: String,
  },
  productprice: {
    type: String,
  },
  productImages: {
    type: Array,
  },
  postedAt: {
    type: Date,
    default: Date.now(),
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  dislikes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  comment: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});


const product = mongoose.model("product", ProductSchema);
export default product;