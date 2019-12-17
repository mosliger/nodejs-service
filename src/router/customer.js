import { Router } from 'express';
import Joi from 'joi';
import validate from 'express-validation';

import response from '../middleware/response';

import { getCustomer, createCustomer } from '../controllers/customer';

const router = Router();

router.get('/customer/:id?', response(getCustomer));

const valdateCreate = {
  body: {
    description: Joi.string().required(), // ชื่อบริษัท
    shortname: Joi.string().required() // ชื่อย่อ
  }
};

router.post('/customer', validate(valdateCreate), response(createCustomer));

export default router;
