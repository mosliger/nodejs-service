const get = (id) => {
  if (id) return `SELECT * FROM user INNER JOIN customer ON user.id = customer.id WHERE user.id = ${id}`;
  return 'SELECT * FROM user INNER JOIN customer ON user.id = customer.id';
};

export {
  get
};
