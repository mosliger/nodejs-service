import connectDB from '../oracle-db';

const getData = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const connection = await connectDB();
      console.log('connection >>', connection);
      resolve({});
    } catch (error) {
      reject(error);
    }
  });
};

export {
  getData
};
