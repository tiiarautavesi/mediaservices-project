const debug = require('debug')('userdata');

const Koa = require('koa');
const router = require('koa-router')();
const fetch = require('node-fetch');
const cors = require('kcors');

//Port for user data API
const port = process.env.PORT || 9000;

app.listen(port);
getLocation.listen(portForLocationAPI);

console.log(`App listening on port ${port}`);
console.log(`LocationAPI listening on port ${portForLocationAPI}`);
