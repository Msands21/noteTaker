const express = require('express');

// Routes for api/html
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require ('./routes/htmlRoutes');

// Iinitialize app, creat port to listen on
const app = express ();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
// app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => console.log(`This port is listening at ${PORT}`));