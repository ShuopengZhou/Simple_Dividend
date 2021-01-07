// import { createRequire } from 'module';
// import controller from './controller/controller.js';
// const require = createRequire(import.meta.url);


const express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    cors = require('cors');
const controller = require('./controller/controller.js');
const DBConnection = require('./dao/connection.js');
const logger = require('./logger/logger.js');
const config = require('./config/config.js');

let app = express()

let db = new DBConnection();
db.connect();

// Show default IP from a reversed proxy (AWS)
app.enable('trust proxy');
// Enable Cross Origin Resource Sharing to all origins by default
app.use(cors());
// Middleware that transforms the raw string of req.body into json
app.use(bodyParser.json());
// Load API routes
app = controller(app)

app.listen(config.port, () => {
    logger('Server launched successfully.');
}).on('error', err => {
    logger('Launching error: ' + err);
    process.exit(1);
});

