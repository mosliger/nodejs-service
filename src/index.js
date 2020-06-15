const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const swaggerUi = require('swagger-ui-express');
const expressValidation = require('express-validation');
const flattenDeep = require('lodash/flattenDeep');
const mongoose = require('mongoose');

const swaggerDocument = require('./swagger.json');

require('dotenv').config();

const router = require('./routes');
const middleware = require('./middleware');

mongoose.connect('mongodb://localhost:27017/template', {
  useNewUrlParser: true,
});

app.server = http.createServer(app);
app.use(bodyParser.json());

app.get('/.env', (req, res) => res.json(process.env));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {}));

app.use(middleware.authentication);
app.use(router);

app.use((err, req, res, next) => {
  if (err instanceof expressValidation.ValidationError) {
    res.json({
      errorMessage: flattenDeep(err.errors.map((error) => error.messages)),
      stack: '',
    });
  } else {
    res.json({
      errorMessage: [err.message],
      stack: err.stack,
    });
  }
});

app.server.listen(process.env.PORT || 3000, () => {
  console.log(`Started on port ${app.server.address().port}`);
});
