
import { toCamelCase } from '../utils';

export default (fn) => async (req, res, next) => {
  Promise.resolve(fn(req, (data) => {
    res.json({ responseData: toCamelCase(data), status: 'SUCCESS' });
  }, next)).catch(next);
};
