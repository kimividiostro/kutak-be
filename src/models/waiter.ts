import mongoose from "mongoose";

const Schema = mongoose.Schema;

let waiter = new Schema({
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
});

export default mongoose.model("Waiter", waiter, "waiters");