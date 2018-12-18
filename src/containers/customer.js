import connectDB from '../db';
import { get } from '../models/customer';

const getCustomer = ({ params }) => {
  return new Promise(async (resolve, reject) => {
    const { id } = params;
    const connection = await connectDB();
    connection.query(get(id), (err, result) => {
      if (err) reject(err);
      resolve(result);
      connection.end();
    });
  });
};

const createCustomer = ({ body }) => {
  return new Promise(async (resolve, reject) => {
    const connection = await connectDB();
    connection.beginTransaction(err => {
      if (err) {
        reject(err);
      }
      const sqlUser = `INSERT INTO user (username, password) VALUES ('${
        body.username
      }', '${body.password}')`;

      connection.query(sqlUser, (userErr, user) => {
        if (userErr) {
          connection.rollback(() => {
            reject(userErr);
          });
        }

        if (user.insertId) {
          const sqlCustomer = `INSERT INTO customer ( id, name, lastname, phone ) VALUES (${
            user.insertId
          }, '${body.name}', '${body.lastname}', '${body.phone}')`;

          connection.query(sqlCustomer, customerErr => {
            if (customerErr) {
              connection.rollback(() => {
                reject(customerErr);
              });
            }
            connection.commit((commitErr, result) => {
              if (err) {
                connection.rollback(() => {
                  reject(commitErr);
                });
              }

              connection.end();
              resolve(result);
            });
          });
        } else {
          connection.rollback(() => {
            reject(err);
          });
        }
      });
    });
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
