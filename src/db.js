import mysql from "mysql";

export default callback => {
  const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
		database: "demo-node",
		socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
  });
  con.connect(err => {
    if (err) throw err;
		console.log("Connected!");
		callback(con);
  });

  
};
