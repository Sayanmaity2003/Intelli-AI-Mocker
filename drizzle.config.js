/** @type { import("drizzle-kit").Config} */

export default {
    schema : "./utils/schema.js",
    dialect : 'postgresql',
    dbCredentials : {
        url : 'postgresql://neondb_owner:fTdj6hAFkU1B@ep-patient-tooth-a5t0dw5l.us-east-2.aws.neon.tech/AI-Interview-Mocker?sslmode=require'
    }
}