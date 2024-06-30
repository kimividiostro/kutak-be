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
  }],
  workingDays: [{
    type: Number
  }],
  workingHoursStart: {
    type: Number
  },
  workingHoursEnd: {
    type: Number
  },
  tables: [{
    tableNumber: {
      type: Number
    },
    numberOfSeats: {
      type: Number
    }
  }]
});

enum Days {
  Monday = 1,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

export default mongoose.model("Restaurant", Restaurant, "restaurants");