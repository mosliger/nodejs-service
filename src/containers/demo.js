import connectDB from '../oracle-db';

const getCompany = () => {
  return new Promise(async (resolve, reject) => {
    const connection = await connectDB();
    try {
      const result = await connection.execute(
        'SELECT * FROM company',
        {},
        { outFormat: 4002 }
      );
      resolve(result.rows || []);
    } catch (error) {
      reject(error);
    } finally {
      await connection.close();
    }
  });
};

export { getCompany };
