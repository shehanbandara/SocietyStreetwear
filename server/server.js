require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');
const routes = require('./routes/Routes');

connectDB();

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
    res.json({ message: "Hello World!" });
});
app.use('/api/products', routes);

const PORT = process.env.PORT || 1600

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))