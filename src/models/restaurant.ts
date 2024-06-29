import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Restaurant = new Schema({
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
  },
  waiters: [{
    type: Schema.Types.ObjectId,
    ref: 'Waiter'
  }]

});

export default mongoose.model("Restaurant", Restaurant, "restaurants");