import { Router } from "express";

export default ({ db }) => {
  let api = Router();

  // perhaps expose some API metadata at the root
  api.get("/customer", (req, res) => {
    db.query("SELECT * FROM customer", (err, result) => {
      if (err) throw err;
      res.json({ body: result, status: "SUCCRESS" });
    });
  });

  api.post("/customer", ({ body }, res) => {
    const sql = `INSERT INTO customer (name, lastname, phone) VALUES ('${body.name}', '${body.lastname}', '${body.phone}')`;
    db.query(sql, err => {
      if (err) throw err;
      res.json({ body: {}, status: "SUCCRESS" });
    });
  });

  return api;
};
