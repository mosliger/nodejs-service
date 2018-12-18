import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import 'babel-polyfill';

import api from './api';
import { authentication } from './middleware';

const app = express();

app.server = http.createServer(app);
app.use(bodyParser.json());

app.use('/api', authentication, api());

app.server.listen(process.env.PORT || 8080, () => {
  console.log(`Started on port ${app.server.address().port}`);
});

export default app;
