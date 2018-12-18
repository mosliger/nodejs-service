const get = id => {
  if (id) { return `SELECT * FROM user INNER JOIN customer ON user.id = customer.id WHERE user.id = ${id}`; }
  return 'SELECT * FROM user INNER JOIN customer ON user.id = customer.id';
};

const create = (params = {}) => {
  const { id, name, lastname, phone } = params;
  return `INSERT INTO customer ( id, name, lastname, phone ) VALUES (${
    id
  }, '${name}', '${lastname}', '${phone}')`;
};

module.exports = { get, create };
