const pg = require("pg");

const client = new pg.Client('postgres://localhost/musicians');

client.connect();

module.exports = client;
