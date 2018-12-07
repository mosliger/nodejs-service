import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';

import initializeDb from './db';
import api from './api';

let app = express();

app.server = http.createServer(app);
app.use(bodyParser.json());

// connect to db
initializeDb( db => {
	// api router
	app.use('/api', api({ db }));

	app.server.listen(process.env.PORT || 8080, () => {
		console.log(`Started on port ${app.server.address().port}`);
	});
});


export default app;