import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import tourRoute  from './routes/tours.js';   
//import { userRouter } from './routes/user.js';
//import { authRouter } from './routes/auth.js';
dotenv.config();    
const app = express();
const port = process.env.PORT || 8000;

mongoose.set('strictQuery', false);
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB database");
    } catch (error) {
        console.log("Error connecting to MongoDB database", error);
    }
}

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use('/tours', tourRoute);

app.listen(port, () => {
    connect();
    console.log(`Server is running on port `, port);
})