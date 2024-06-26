import mongoose from "mongoose";

const Schema = mongoose.Schema;

let guest = new Schema({
  userName: {
    type: String
  },
  password: {
    type: String
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

export default mongoose.model("Guest", guest, "guests");