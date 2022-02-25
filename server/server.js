require('dotenv').config();

const express = require('express');

const app = express();

const PORT = process.env.PORT || 1600

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))