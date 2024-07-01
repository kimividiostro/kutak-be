import express from "express";
const router = express.Router();

import makeReservation from "../controllers/reservation/makeReservation";
import getReservationsForUser from "../controllers/reservation/getReservationsByUser";
import getReservationsByRestaurant from "../controllers/reservation/getReservationsByRestaurant";

router.get('/reservation/guest/:guestId', getReservationsForUser);
router.get('/reservation/restaurant/:restaurantId', getReservationsByRestaurant);
router.post('/reservation/new', makeReservation);

export {router as reservationRouter};