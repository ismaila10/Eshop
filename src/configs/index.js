const dbConfig = require('./db.config');
const serverConfig = require('./server.config');
const jwtConfig = require('./jwt.config');

exports.database = dbConfig;
exports.server = serverConfig;
exports.jwt = jwtConfig;