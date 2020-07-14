const express = require('express');
require('./config/db_config');


//  Import Routes
const productRote = require('./routes/product');


//  Set up Express App
const app = express();


//  parse JSON-encoded bodies and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//  Requesting for imported Routes
app.use('/api/product', productRote);


//  Set up Express Server
const PORT = process.env.PORT || 5000;
const HOST = "localhost"
app.listen(PORT, () => {
    console.log(`Express server running on port ${PORT}, Kindly visit http//${HOST}:${PORT}`);
});