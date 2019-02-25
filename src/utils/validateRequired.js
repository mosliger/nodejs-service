import forEach from 'lodash/forEach';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import isString from 'lodash/isString';
import isNumber from 'lodash/isNumber';
import isArray from 'lodash/isArray';
import trim from 'lodash/trim';

const isEmptyValue = value => {
  if (isNumber(value)) return false;
  if (isEmpty(value)) return true;
  return false;
};

const valitate = (value, key, rules) => {
  let message = '';
  forEach(rules, rule => {
    switch (rule) {
      case 'required': {
        if (isEmptyValue(value)) {
          message = `${message}${key} is required.\n`;
        }
        break;
      }
      case 'string': {
        if (!isString(value)) {
          message = `${message}${key} typeof string.\n`;
        }
        break;
      }
      case 'number': {
        if (!isNumber(value)) {
          message = `${message}${key} typeof number.\n`;
        }
        break;
      }
      case 'array': {
        if (!isArray(value)) {
          message = `${message}${key} typeof array.\n`;
        }
        break;
      }
      default:
        break;
    }
  });
  return trim(message, '\n');
};

export default (values, rules) => {
  const res = [];
  forEach(rules, (rule, key) => {
    const message = valitate(get(values, key), key, rule.split('|'));
    if (!isEmpty(message)) res.push(message);
  });

  return res;
};
