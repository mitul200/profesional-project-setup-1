import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { studentRouter } from './app/modules/student/student.route';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// application routs
app.use('/api/v1/students', studentRouter);

app.get('/', (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
});

console.log(process.cwd());

export default app;
