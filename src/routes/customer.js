const express = require('express');

const router = express.Router();
const customer = require('../controllers/customer');

router.get('/customer/:id', customer.getCustomer);

// const valdateCreate = {
//   body: {
//     description: Joi.string().required(), // ชื่อบริษัท
//     shortname: Joi.string().required() // ชื่อย่อ
//   }
// };

// router.post('/customer', validate(valdateCreate), response(createCustomer));

module.exports = router;
