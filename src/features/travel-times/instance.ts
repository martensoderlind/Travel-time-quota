import { db } from "./index";
import { createTripService } from "./service";

export const createFeature = createTripService(db);
