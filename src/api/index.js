import { Router } from 'express';
import response from '../middleware/response';

import {
  getCustomer,
  createCustomer
} from '../containers/customer';

import {
  getData
} from '../containers/demo';

export default () => {
  const api = Router();

  api.get('/customer/:id?', response(getCustomer));
  api.post('/customer', response(createCustomer));
  api.post('/oracle', response(getData));

  return api;
};
