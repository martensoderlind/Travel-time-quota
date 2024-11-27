import {
  pgTable,
  serial,
  text,
  varchar,
  timestamp,
  integer,
} from "drizzle-orm/pg-core";
export const messagesTable = pgTable("messages", {
  id: serial().primaryKey().notNull(),
  content: text().notNull(),
  user_id: text().notNull(),
  user_name: varchar({ length: 255 }).notNull(),
  timestamp: timestamp().notNull().defaultNow(),
});

export const carTable = pgTable("carTable", {
  id: serial().primaryKey().notNull(),
  timestamp: timestamp().notNull(),
  duration: integer().notNull(),
  from: text().notNull(),
  to: text().notNull(),
  geometry: text().notNull(),
});
