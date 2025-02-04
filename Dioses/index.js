'use strict';

var path = require('path');
var http = require('http');
var cors = require('cors');
var express = require('express');

var oas3Tools = require('oas3-tools');
var serverPort = 8080;

// swaggerRouter configuration
var options = {
    routing: {
        controllers: path.join(__dirname, './controllers')
    },
};

var expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);

// Create the express app
const openApiApp = expressAppConfig.getApp();
const app = express();

// Configure CORS to allow requests from localhost:4200 only
var corsOptions = {
    origin: 'http://localhost:4200',  // Allow requests only from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  // You can add other methods if needed
    allowedHeaders: ['Content-Type', 'Authorization']  // Customize if needed
};

// Apply CORS middleware before other middleware
app.use(cors(corsOptions));

// Body parser middleware to parse JSON requests
app.use(express.json());  // To handle POST/PUT requests with JSON payloads

// Swagger routes (API)
for (let i = 2; i < openApiApp._router.stack.length; i++) {
    app._router.stack.push(openApiApp._router.stack[i])
}

// Initialize the Swagger middleware and start the server
http.createServer(app).listen(serverPort, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
});
