const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');

const port = process.env.PORT || 443;

app.use(cors());
app.use(bodyParser.json());

app.use('/', routes);

app.listen(port, () => {
    console.log(`app is running on port ${port}`);
});


