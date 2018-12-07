export default ({ db }) => {
  api.get('/', (req, res) => {
    db.query("SELECT * FROM customer", (err, result) => {
      if (err) throw err;
      res.json({ body: result });
    });
  });
}