import mongoose from "mongoose";

const Schema = mongoose.Schema;

let admin = new Schema({
  userName: {
    type: String
  },
  password: {
    type: String
  }
});

export default mongoose.model("Admin", admin, "admins");