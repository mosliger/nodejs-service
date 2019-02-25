import oracledb from 'oracledb';

export default () => {
  return new Promise((resolve, reject) => {
    oracledb.getConnection(
      {
        user: '',
        password: '',
        connectString: '',
        poolMin: 10,
        poolMax: 10,
        poolIncrement: 0
      },
      (err, connection) => {
        if (err) {
          reject(err);
        }
        console.log('connected');
        resolve(connection);
      }
    );
  });
};
