const knex = require('knex'); // import knex
const configuration = require('../../knexfile'); // import knex file for configuration of the connection

const conncetion = knex(configuration.development); //use development as default

module.exports = conncetion; // exports the connection