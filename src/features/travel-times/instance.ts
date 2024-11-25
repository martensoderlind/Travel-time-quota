import { db } from "../fixtures/mockdb";
import { createTripService } from "./service";

export const createFeature = createTripService(db);
