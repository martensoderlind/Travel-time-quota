import { db } from "./db/index";
import { createTripService } from "./service";

export const createFeature = createTripService(db);
