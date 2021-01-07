const mongoose = require('mongoose');

const config = require('../config/config.js');
const logger = require('../logger/logger.js');



module.exports = class DBConnection {
    connect() {
        const db = mongoose.connect(config.dbUrl, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        });
        mongoose.connection.on("error", function(error){
            logger("Db connection errot: " + error);
        });
        mongoose.connection.on("open",function(error){
            logger("Db connection success!");
        });        
    }
}