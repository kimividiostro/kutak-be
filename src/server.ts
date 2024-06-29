import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { restaurantRouter } from "./routes/restaurant";

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/',
  restaurantRouter
)


mongoose.connect("mongodb://127.0.0.1:27017/kutak_dobre_hrane_db");
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("db connection ok");
});

app.listen(4000, () => console.log(`Express server running on port 4000`));