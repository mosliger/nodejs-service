const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

const getCustomer = (req, res, next) => {
  MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    try {
      if (err) throw err;
      const db = client.db('template');
      db.collection('users').findOne({}, (findErr, result) => {
        if (findErr) throw findErr;
        res.json(result);
      });
    } catch (error) {
      next(error);
    } finally {
      client.close();
    }
  });
};

module.exports = {
  getCustomer,
};
