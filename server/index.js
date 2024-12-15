import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userroutes from './routes/user.js';

const app = express();
dotenv.config();
app.use(express.json({limit: "30mb", extended: true}));
app.use(cors());

app.use('/user', userroutes);
app.get('/', (req, res) => {
    res.status(200).json({"message": "server is running."});
});

const PORT = process.env.PORT || 6000;
const DB_URI = process.env.DB_URI;

mongoose.connect(DB_URI , {dbName: 'StackOverflowData'})
    .then(() => app.listen(PORT, () => console.log(`server is running on port ${PORT}`)))
    .catch((err) => console.log(err.message))