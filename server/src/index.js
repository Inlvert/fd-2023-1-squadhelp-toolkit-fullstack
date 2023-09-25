const http = require('http');
const express = require('express');
const cors = require('cors');
require('./dbMongo/mongoose');
const router = require('./router');
const controller = require('./socketInit');
const handlerError = require('./handlerError/handler');
const multerErrorHandler = require('./handlerError/multerErrorHandler');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/public', express.static('public'));
app.use(router);

app.use(multerErrorHandler);
app.use(handlerError);

const server = http.createServer(app);
server.listen(PORT,
  () => console.log(`Example app listening on port ${ PORT }!`));
controller.createConnection(server);


