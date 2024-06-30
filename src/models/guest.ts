import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Guest = new Schema({
  userName: {
    type: String
  },
  password: {
    type: String,
    select: false
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  gender: {
    type: String
  },
  address: {
    type: String
  },
  phone: {
    type: String
  },
  email: {
    type: String
  },
  profilePicture: {
    type: String
  },
  cardNumber: {
    type: String
  },
});

export default mongoose.model("Guest", Guest, "guests");