const express = require('express');

const users = require('./users');
const swagger = require('./swagger');

const api = express.Router();

api.use(users);
api.use(swagger);

module.exports = api
