import { Router } from 'express';
import response from '../middleware/response';

import {
  getCustomer,
  createCustomer
} from '../containers/customer';

import {
  getCompany
} from '../containers/demo';

export default () => {
  const api = Router();

  api.get('/customer/:id?', response(getCustomer));
  api.post('/customer', response(createCustomer));
  api.get('/company', response(getCompany));

  return api;
};
