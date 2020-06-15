const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json')
const port = 3000;

const router = require('./routes');

app.server = http.createServer(app);
app.use(bodyParser.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {}));

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

app.server.listen(port, () => {
  console.log(`Started on port ${app.server.address().port}`);
});
