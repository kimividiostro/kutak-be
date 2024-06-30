import express from "express";
const router = express.Router();

import getGuests from "../controllers/guest/getGuests";

router.get('/guests', getGuests);

export { router as guestRouter };