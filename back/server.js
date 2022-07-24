const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const PORT = process.env.PORT || 8000;

// built-in middleware to handle urlencoded data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

// serve static
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/', require('./routes/root'));

app.listen(PORT, () => console.log(`server running on port ${PORT}`))