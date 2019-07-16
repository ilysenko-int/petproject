const log = require('./libs/log.js')(module);
const express = require('express');
const cors = require('cors');
const initial = require('./config/initial');
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
  credentials: true,
};
function allRoutes (app) {
  app.get('/mz_cashier_get_general_settings_front&:lang*?', cors(corsOptions), function (req, res) {
    log.info('Request GET for [' + req.url + '] ok.');
    const result = initial.general_settings_front;
    setTimeout((function() {res.json(result)}), 2000);
  });
  app.get('/mz_cashier_get_existing_cards', cors(corsOptions), function (req, res) {
    log.info('Request GET for [' + req.url + '] ok.');
    const result = initial.mz_cashier_get_existing_cards;
    res.json(result);
  });
  app.post('/get_new_address', cors(corsOptions), function (req, res) {
    log.info('Request GET for [' + req.url + '] ok.');
    const result = initial.get_new_address;
    res.json(result);
  });
  app.get('/mz_cashier_get_countries&:lang*?', cors(corsOptions), function (req, res) {
    log.info('Request GET for [' + req.url + '] ok.');
    const result = initial.get_countries;
    res.json(result);
  });
  app.post('/get_new_address', cors(corsOptions), function (req, res) {
    log.info('Request GET for [' + req.url + '] ok.');
    const result = initial.get_new_address;
    res.json(result);
  });
  app.post('/mz_cashier_deposit:lang*?', cors(corsOptions), function(req, res) {
    log.info('Request POST for DEPOSIT ok');
    let body = '';
    let result;
    req.on('readable', function() {
      body += req.read();
    })
      .on('end',function() {
        body = body.split('null').join('');
        body = JSON.parse('{"' + decodeURI(body).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
        log.info('Request type set to ' + body.Address);
        if (body.Address == 'deposit+3d' || body.Address == '+deposit+3d') {
          result = initial.deposit3d;
        }
        else if (body.Address == 'failed' || body.Address == '+deposit+fail') {
          result = initial.depositFail;
        }
        else result = initial.depositSuccess;
        res.end(JSON.stringify(result));
      });
  });
  app.post('/mz_cashier_apm_deposit&:lang*?', cors(corsOptions), function(req, res) {
    log.info('Request POST for DEPOSIT ok');
    let body = '';
    let result;
    req.on('readable', function() {
      body += req.read();
    })
      .on('end',function() {
        body = body.split('null').join('');
        body = JSON.parse('{"' + decodeURI(body).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
        log.info('Request type set to ' + body.Address);
        res.end(JSON.stringify(initial.depositAPM));
      });
  });
  app.options('/*', function(req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, Access-Control-Allow-Credentials');
    res.send(200);
  });
  app.use('/', express.static('./client/public'));
  app.use(function (req, res) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    if (app.get('env') == 'development') {
      log.error('Page' + req.url + ' not found');
      res.send(404, 'Page Not Found');
    }
    else {
      log.error('Request for [' + req.url + '] not found');
      res.send(500);
    }
  })
};
module.exports = allRoutes;