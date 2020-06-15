const express = require('express');

const customer = require('./customer');
const swagger = require('./swagger');

const api = express.Router();

api.use(customer);
api.use(swagger);

module.exports = api
