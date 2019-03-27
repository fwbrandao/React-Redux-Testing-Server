// MAIN STARTING POINT OF THE APP
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
const router = require('./router');
const cors = require('cors');

// DB SETUP
mongoose.connect("mongodb://localhost:auth/auth", { useNewUrlParser: true });

// APP SETUP
// morgan is a middleware used for log requests
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/* '}));
router(app);

// SERVER SETUP
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);


