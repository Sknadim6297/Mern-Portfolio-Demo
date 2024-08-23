const express = require('express');
const app = express();
const port= 5000;
const cors = require('cors');
require('dotenv').config();
const {connectDb} =require('./connect');
const routes=require('./routes/routes');
const cookieParser = require('cookie-parser');


//Db Connection
connectDb();

app.get('/', (req, res) => {
    res.send('Hello World');
});

//middlewares
app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}));
app.use(express.json())
app.use(cookieParser());

//routes

app.use('/api',routes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}
);