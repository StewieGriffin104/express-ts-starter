import express, { Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';
// routes
import healthRouter from './routes/health';

const app = express();
const port = process.env.port || 3000;
const version = process.env.version || '0.0.5';
const v1Prefix = '/api/v1';

app.use(helmet());
app.use(cors());

app.use(v1Prefix, healthRouter);

const server = app.listen(port, () => {
  console.log(`${version} - Server is running on port ${port}...`);
});

export { app, server };
