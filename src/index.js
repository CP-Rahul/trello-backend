const express = require('express');
const { ServerConfig } = require('./config');
const dbConnect = require('./config/db-config');

const apiRoutes = require('./routes');

const app = express();

app.use(express.json());

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log(`Server is up on port:${ServerConfig.PORT}`);
    dbConnect();
});