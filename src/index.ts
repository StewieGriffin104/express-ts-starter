import express, { Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';

const app = express();
const port = process.env.port || 3000;
const version = process.env.version || '0.0.5';

app.use(helmet());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Hello World!',
  });
});

const server = app.listen(port, () => {
  console.log(`${version} - Server is running on port ${port}...`);
});

export { app, server };
