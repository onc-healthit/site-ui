// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

const multer = require('multer');
const forms = multer();


// Get our API routes
const api = require('./server/routes/api');

const app = express();

app.use(express);
// Parsers for POST data
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser());

app.use(bodyParser.json());
app.use(forms.array()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.use(fileUpload({
    createParentPath: true
}));

  // app.use(upload.array()); 
  // app.use(express.static('public'));

// app.use( bodyParser.json({limit: '50mb'}) );
// app.use(bodyParser.urlencoded({
//   limit: '50mb',
//   extended: true,
//   parameterLimit:50000
// }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '80';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
