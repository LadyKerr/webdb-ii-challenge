const knex = require("knex");

const knexConnect = require("../knexfile.js");

module.exports = knex(knexConnect.development);
