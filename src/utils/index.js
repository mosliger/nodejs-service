import map from 'lodash/map';
import camelCase from 'lodash/camelCase';
import mapKeys from 'lodash/mapKeys';
import isArray from 'lodash/isArray';
import isObject from 'lodash/isObject';
import mapValues from 'lodash/mapValues';
import isDate from 'lodash/isDate';

const mapKeyObject = values => {
  const changeKeys = mapKeys(values, (value, key) => {
    return camelCase(key);
  });
  return mapValues(changeKeys, data => {
    if (isDate(data)) return data;
    if (isArray(data) || isObject(data)) {
      return toCamelCase(data);
    }
    return data;
  });
};

const toCamelCase = values => {
  if (isArray(values)) {
    return map(values, obj => {
      if (isArray(obj)) return toCamelCase(obj);
      if (isObject(obj)) return mapKeyObject(obj);
      return obj;
    });
  }

  if (isObject(values)) {
    return mapKeyObject(values);
  }

  return values;
};

export { toCamelCase };
