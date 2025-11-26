import './config/instrument.js';
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import ConnectDB from "./config/db.js";
import * as Sentry from "@sentry/node";
import { clerkWebhooks } from "./controllers/webhooks.js";
import companyRoutes from "./routes/companyRoutes.js";


const app = express();

// Connect DB
await ConnectDB();

app.use(cors());
app.use(express.json());

// Routes
app.get('/',(req, res) => res.send("API Working"))

app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

app.post('/webhooks',clerkWebhooks)

app.use('/api/company', companyRoutes)

// Sentry Error Handler (v8 style)
Sentry.setupExpressErrorHandler(app);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is Running On Port ${PORT}`);
});
