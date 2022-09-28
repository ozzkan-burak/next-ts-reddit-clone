import "reflect-metadata";
import {createConnection} from "typeorm";
import express from "express";
import morgan from "morgan";

import authRoutes from './routes/auth';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res)=> res.send('Hello World'));
app.use('/api/auth', authRoutes);

const PORT = 5001

app.listen(PORT, async () => {
 console.log(`Server ${PORT} üzerinde çalışıyor.`);
 
 try {
    await createConnection();
    console.log('Database connection!')
 } catch (err) {
     console.log(err);
 };
})
