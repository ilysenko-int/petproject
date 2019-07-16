'use strict';

var express = require ('express');
var config = require('./config');
var http = require ('http');
var log = require('./libs/log.js')(module);

var app = express();
var server = http.createServer(app);
require('./routes')(app);

function startServer() {
    app.server = server.listen(config.port, config.ip, function() {
    log.info('Express server listening on %d, in %s mode', config.port, app.get('env'));
    log.warn('Type to address field: "deposit 3d" or "deposit failed" to get same behaviour. Default is "deposit success" behaviour');
    log.warn('Valid coupon number is "223322", other are not valid');
    });
}

startServer();
module.exports = app;
