import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Admin = new Schema({
  userName: {
    type: String
  },
  password: {
    type: String,
    select: false
  }
});

export default mongoose.model("Admin", Admin, "admins");