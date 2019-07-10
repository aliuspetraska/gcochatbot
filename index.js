const secure = require('express-secure-only');
const compression = require('compression');
const bodyParser = require('body-parser');
const express = require('express');
const api = require('./routes');
const http = require('http');
const path = require('path');
const cors = require('cors');

const app = express();

app.enable('strict routing');
app.enable('trust proxy');

if (process.env.NODE_ENV === 'production') {
    app.use(secure());
}

app.use(cors());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', api);

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

http.createServer(app).listen(process.env.port || 8080, () => {
    console.log('Server started.');
});
