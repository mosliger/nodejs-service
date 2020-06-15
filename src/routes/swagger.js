const express = require('express');

const router = express.Router();

const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

// Swagger set up
const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {},
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: [],
};

const specs = swaggerJsdoc(options);

router.use('/docs', swaggerUi.serve);
router.get('/docs', swaggerUi.setup(specs, { explorer: true }));

module.exports = router;