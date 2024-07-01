import express from "express";
const router = express.Router();

import makeReservation from "../controllers/reservation/makeReservation";
import getReservationsForUser from "../controllers/reservation/getReservationsByUser";

router.get('/reservation/guest/:guestId', getReservationsForUser);
router.post('/reservation/new', makeReservation);

export {router as reservationRouter};