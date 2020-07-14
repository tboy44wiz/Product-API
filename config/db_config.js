const mongoose = require('mongoose');

//  Connect to Mongo Db using Mongoose
module.exports = mongoose.connect("mongodb://localhost/AddProductDB", {
    useNewUrlParser: true,
    useUnifiedToplogy: true,
});