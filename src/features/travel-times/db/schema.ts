import {
  pgTable,
  serial,
  text,
  timestamp,
  integer,
  jsonb,
} from "drizzle-orm/pg-core";
export const publictransportTable = pgTable("publictransportTable", {
  id: serial().primaryKey().notNull(),
  timestamp: timestamp().notNull(),
  data: jsonb().notNull(),
});

export const carTable = pgTable("carTable", {
  id: serial().primaryKey().notNull(),
  timestamp: timestamp().notNull(),
  duration: integer().notNull(),
  from: text().notNull(),
  to: text().notNull(),
  geometry: text().notNull(),
});
