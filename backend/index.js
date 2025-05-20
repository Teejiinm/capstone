import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import tourRoute  from './routes/tours.js';   
import userRoute from './routes/users.js';
import authRoute from './routes/auth.js';
import reviewRoute from './routes/reviews.js';
import bookingRoute from './routes/bookings.js';

dotenv.config();    
const app = express();
const port = process.env.PORT || 8000;
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
};

mongoose.set('strictQuery', false);
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB database");
    } catch (error) {
        console.log("Error connecting to MongoDB database", error);
    }
}

app.use(cors(corsOptions));
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use(express.json());
app.use(cookieParser());
app.use('/api/v1/tours', tourRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/review', reviewRoute);
app.use('/api/v1/booking', bookingRoute);


app.listen(port, () => {
    connect();
    console.log(`Server is running on port `, port);
})