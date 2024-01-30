// Get dependencies
const express = require('express');
const path = require('path');
const https = require('https');
const fs = require('fs');
const bodyParser = require('body-parser');

// Get our API routes
const api = require('./server/routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, '/dist')));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.redirect('/index.html');
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.SITE_PORT || '443';
app.set('port', port);


// SSL Setup
const privateKey = fs.readFileSync(process.env.SITE_PRIVATE_KEY);
const certificate = fs.readFileSync(process.env.SITE_CERTIFICATE);
const sslSetup = {key: privateKey, cert: certificate};

/**
 * Create HTTP server.
 */
const httpsServer = https.createServer(sslSetup, app);

/**
 * Listen on provided port, on all network interfaces.
 */
httpsServer.listen(port, () => console.log(`API running on port:${port}`));
