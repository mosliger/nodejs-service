import mysql from 'mysql';

const query = (connection, sql) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, (err, result, fields) => {
      if (err) reject(err);
      resolve({
        err,
        result,
        fields
      });
    });
  });
};

const commit = connection => {
  return new Promise((resolve, reject) => {
    connection.commit((err, result) => {
      if (err) {
        connection.rollback(() => {
          reject(err);
        });
      }
      resolve(result);
    });
  });
};

export default () => {
  const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'demo-node',
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock' // for-mac
  });

  return new Promise((resolve, reject) => {
    con.connect(err => {
      if (err) reject(err);
      resolve({
        beginTransaction: con.beginTransaction,
        rollback: con.rollback,
        commit: () => commit(con),
        disconnect: () => con.end(),
        query: sql => {
          return query(con, sql);
        }
      });
    });
  });
};
