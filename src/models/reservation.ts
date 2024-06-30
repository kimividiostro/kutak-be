import mongoose, { Schema } from "mongoose";

let Reservation = new Schema({
    restaurant: {
        type: Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true
    },
    numberOfPeople: {
        type: Number
    },
    table: {
        tableNumber: {
            type: Number
        }
    },
    guest: {
        type: Schema.Types.ObjectId,
        ref: 'Guest',
        required: true
    },
    reservationStartTime: {
        type: Date,
        required: true
    },
    reservationEndTime: {
        type: Date,
        required: true
    }
})

export default mongoose.model('Reservation', Reservation, 'reservations');