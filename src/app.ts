import cors from 'cors';
import { studentRouter } from './app/modules/student/student.route';
import { UserRouter } from './app/modules/user/user.route';
import express, { Application, Request, Response } from 'express';

import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFound from './app/middleware/notFound';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// application routs
app.use('/api/v1/students', studentRouter);
app.use('/api/v1/users', UserRouter);

app.get('/', (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
});

// not found message
app.use(notFound);

// error handler
app.use(globalErrorHandler);

export default app;
