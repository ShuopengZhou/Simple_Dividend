import { createRequire } from 'module';
const require = createRequire(import.meta.url);
let mongoose = require('mongoose');

import { config } from '../config/config.js'
import { logger } from '../logger/logger.js'

export class dbConnection {
    connect() {
        let db = mongoose.connect(config.dbUrl, {
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