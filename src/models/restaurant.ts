import mongoose from "mongoose";

const Schema = mongoose.Schema;

let restaurant = new Schema({
  name: {
    type: String
  },
  address: {
    type: String
  },
  phone: {
    type: String
  },
  type: {
    type: String
  }
});

export default mongoose.model("restaurant", restaurant, "restaurants");