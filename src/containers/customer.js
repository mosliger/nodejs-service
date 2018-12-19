import get from 'lodash/get';

import connectDB from '../db';
import Customer from '../models/customer';
import User from '../models/user';

const getCustomer = ({ params }) => {
  return new Promise(async (resolve, reject) => {
    const { id } = params;
    try {
      const connection = await connectDB();
      const { result } = await connection.query(Customer.get(id));
      connection.disconnect();
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

const createCustomer = ({ body }) => {
  return new Promise(async (resolve, reject) => {
    const connection = await connectDB();
    try {
      await connection.beginTransaction();
      const createUser = await connection.query(
        User.create({ username: body.username, password: body.password })
      );
      const createCustomer = {
        id: get(createUser, 'result.insertId'),
        name: body.name,
        lastname: body.lastname,
        phone: body.phone
      };
      await connection.query(Customer.create(createCustomer));
      const result = await connection.commit();
      connection.disconnect();
      resolve(result);
    } catch (error) {
      connection.rollback();
      connection.disconnect();
      reject(error);
    }
  });
};

const updateCustomer = ({ body, params }) => {
  return new Promise(async (resolve, reject) => {
    const connection = await connectDB();
    const sql = `UPDATE customer SET ? WHERE id = ${params.id}`;
    connection.query(sql, body, (err, result) => {
      if (err) reject(err);
      connection.end();
      resolve(result);
    });
  });
};

export { getCustomer, createCustomer, updateCustomer };
