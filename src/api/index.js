import { Router } from 'express';
import response from '../middleware/response';

import {
  getCustomer,
  createCustomer,
  updateCustomer
} from '../containers/customer';

export default () => {
  const api = Router();

  api.get('/customer/:id?', response(getCustomer));
  api.post('/customer', response(createCustomer));
  api.put('/customer/:id/:name/:lastname', response(updateCustomer));

  return api;
};
