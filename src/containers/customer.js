import connectDB from '../db';
import Customer from '../models/customer';
import User from '../models/user';

const getCustomer = ({ params }) => {
  return new Promise(async (resolve, reject) => {
    const { id } = params;
    try {
      const connection = await connectDB();
      connection.query(Customer.get(id), (err, result) => {
        if (err) reject(err);
        resolve(result);
        connection.end();
      });
    } catch (error) {
      reject(error);
    }
  });
};

const createCustomer = ({ body }) => {
  return new Promise(async (resolve, reject) => {
    const connection = await connectDB();
    connection.beginTransaction(err => {
      if (err) {
        reject(err);
      }
      const userCreate = {
        username: body.username,
        password: body.password
      };

      connection.query(User.create(userCreate), (userErr, user) => {
        if (userErr) {
          connection.rollback(() => {
            reject(userErr);
          });
        }

        if (user.insertId) {
          const createCustomer = {
            id: user.insertId,
            name: user.name,
            lastname: user.lastname,
            phone: user.phone
          };

          connection.query(Customer.create(createCustomer), customerErr => {
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
