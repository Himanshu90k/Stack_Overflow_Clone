import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userroutes from './routes/user.js';

dotenv.config();
const PORT = process.env.PORT || 6000;
const DB_URI = process.env.DB_URI;

const app = express();
app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded( {extended: false} ));

app.use('/user', userroutes);
app.get('/', async (req, res) => {
    res.status(200).json({ "message": "server is running." });
});

// Connect to MongoDB
mongoose.connect(DB_URI, { dbName: 'stackOverflowData' })
    .then((conn) => {
        const { host, port } = conn.connection
        console.log(`The mongoDB host: ${host} - is connected on port: ${port}`)
    })
    .catch((err) => {
        console.log("monogDB connection error: ", err)
    })


app.listen(PORT, () => console.log(`The server is running on port: ${PORT}`));