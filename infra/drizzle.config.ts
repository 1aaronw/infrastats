import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dialect: 'postgresql',
  schema: '../frontend/src/db/schema',
  out: './drizzle',
  dbCredentials: { url: process.env.DATABASE_URL! },
})