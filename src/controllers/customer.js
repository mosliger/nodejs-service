import { MongoClient } from 'mongodb';

const getCustomer = (req, res) => {
  MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    try {
      if (err) throw err;
      const db = client.db('template');
      db.collection('users').findOne({}, (findErr, result) => {
        if (findErr) throw findErr;
        console.log(result);
        res(result);
      });
    } catch (error) {
      throw new Error(error);
    } finally {
      client.close();
    }
  });
};

export { getCustomer };
