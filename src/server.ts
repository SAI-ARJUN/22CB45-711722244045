import express from "express";
import { logger } from "./middleware/logger";

const app = express();
app.use(express.json());
app.use(logger); 

// Your routes here...
