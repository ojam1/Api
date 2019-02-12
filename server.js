const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(corsOptions));

const routes = require('./api/routes/routes');

routes(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


