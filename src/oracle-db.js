import oracledb from 'oracledb';

export default () => {
  return new Promise((resolve, reject) => {
    oracledb.getConnection(
      {
        user: 'TRMOWNER',
        password: 'freewill',
        connectString: '(DESCRIPTION=(ADDRESS_LIST=(ADDRESS=(PROTOCOL=TCP)(HOST=172.19.192.114)(PORT=1553)))(CONNECT_DATA=(SERVER=DEDICATED)(SERVICE_NAME=TRMUAT)))',
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
