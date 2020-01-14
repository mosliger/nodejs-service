import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import expressValidation from 'express-validation';
import flattenDeep from 'lodash/flattenDeep';

import 'babel-polyfill';

import router from './router';
import { authentication } from './middleware';

const app = express();
const base = '/api';

app.server = http.createServer(app);
app.use(bodyParser.json());

app.use(base, authentication, router());
app.use((err, req, res, next) => {
  if (err instanceof expressValidation.ValidationError) {
    res.json({
      errorMessage: flattenDeep(err.errors.map(error => error.messages)),
      stack: ''
    });
  } else {
    res.json({
      errorMessage: [err.message],
      stack: err.stack
    });
  }
});

app.server.listen(8888, () => {
  console.log(`Started on port ${app.server.address().port}`);
});

export default app;
