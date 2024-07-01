import express from "express";
const router = express.Router();

import makeReservation from "../controllers/reservation/makeReservation";

router.post('/reservation/new', makeReservation);

export {router as reservationRouter};