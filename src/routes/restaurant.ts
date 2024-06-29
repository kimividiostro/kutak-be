import express from "express";
const router = express.Router();

import getRestaurants from "../controllers/restaurant/getRestaurants";

router.get('/restaurants', getRestaurants);

export { router as restaurantRouter };