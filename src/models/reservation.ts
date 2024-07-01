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
    reservationStart: {
        type: Date,
        required: true
    },
    reservationEnd: {
        type: Date,
        required: true
    },
    specialInstructions: {
        type: String
    },
    isProcessed: {
        type: Boolean,
        default: false
    }
})

export default mongoose.model('Reservation', Reservation, 'reservations');