const get = id => {
  if (id) {
    return `SELECT * FROM user WHERE user.id = ${id}`;
  }
  return 'SELECT * FROM user';
};

const create = (params = {}) => {
  const { username, password } = params;
  return `INSERT INTO user (username, password) VALUES ('${username}', '${password}')`;
};

module.exports = { get, create };
