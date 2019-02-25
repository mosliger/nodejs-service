import { Router } from 'express';

import customer from './customer';

export default () => {
  const api = Router();
  api.use(customer);
  return api;
};
