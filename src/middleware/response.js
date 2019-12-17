export default (fn) => async (req, res, next) => {
  Promise.resolve(fn(req, (data) => {
    res.json({ responseData: data, status: 'SUCCESS' });
  }, next)).catch(next);
};
