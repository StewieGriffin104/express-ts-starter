import express, { Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';
// routes
import healthRouter from './routes/health';
import { checkEnv } from './config/checkEnv';
import { REQUIRED_ENV } from './config/requiredEnv';

dotenv.config();

const app = express();
checkEnv(REQUIRED_ENV);

const port = process.env.PORT;
const version = process.env.VERSION;
const mode = process.env.MODE;
const v1Prefix = '/api/v1';

app.use(helmet());
app.use(cors());

app.use(v1Prefix, healthRouter);

const server = app.listen(port, () => {
  console.log(`${mode} - ${version} - Server is running on port ${port}...`);
});

export { app, server };
