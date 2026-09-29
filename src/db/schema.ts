import { pgTable, serial, text, timestamp, jsonb } from "drizzle-orm/pg-core";

// Contact / estimate requests submitted through the site.
export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  address: text("address"),
  city: text("city"),
  zip: text("zip"),
  projectType: text("project_type"),
  material: text("material"),
  projectSize: text("project_size"),
  message: text("message"),
  source: text("source"),
  photos: jsonb("photos").$type<string[]>().default([]),
  status: text("status").default("new").notNull(),
});

export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type NewContactSubmission = typeof contactSubmissions.$inferInsert;
