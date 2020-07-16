const Sequelize = require('sequelize');

//  Create an instance of Sequelize.
const sequelizeConnection = new Sequelize("product_db", process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.HOST,
    dialect: "mysql",
})

module.exports = sequelizeConnection;



/*
const mongoose = require('mongoose');

//  Connect to Mongo Db using Mongoose
module.exports = mongoose.connect("mongodb://localhost/AddProductDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
*/
