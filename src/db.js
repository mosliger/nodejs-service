import mysql from 'mysql';

export default () => {
  const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'demo-node',
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
  });
  return new Promise((resolve, reject) => {
    con.connect(err => {
      if (err) reject(err);
      console.log('Connected!'); // eslint-disable-line
      resolve(con);
    });
  });
};
