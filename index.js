const express = require('express');
const cors = require('cors');
const connectDB = require('./mongodb');
const route = require('./route');

connectDB();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/boards', route);

const PORT = 5000;

app.listen(PORT, console.log(`server run in port ${PORT}`));