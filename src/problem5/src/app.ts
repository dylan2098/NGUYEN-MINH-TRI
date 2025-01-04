import express, { NextFunction, Request, Response } from 'express';
import 'dotenv/config';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import router from './routes';
import limiter from './middlewares/limiter';

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use((req, res, next) => {
  const delay = parseInt(process.env.DELAY || '0');
  setTimeout(next, delay);
});

app.use(morgan('dev'));
app.use(helmet());
app.use(compression());
app.use(express.json());
// app.use(limiter);


// utf8
app.use(express.urlencoded({ extended: true }));
app.use('/', router);

app.use((req, res, next) => {
  return res.status(404).json({
    error: true,
    code: 404,
    message: 'Not Found',
    metadata: []
  })
});

// manage errors
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    const statusCode = error.code || 500;
    return res.status(statusCode).json({
        error: true,
        code: error.code,
        message: error.message || "Internal Server Error",
        metadata: []
    });
});

export default app;