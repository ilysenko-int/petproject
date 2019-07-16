var winston = require('winston');

function getLogger(module) {
    var path = module.filename;
    if ((path.indexOf('/')+1)) path = path.split('/').slice(-2).join('/');
    if ((path.indexOf('\\')+1)) path = path.split('\\').slice(-2).join('/');


    return winston.createLogger({
        transports: [
            new winston.transports.Console({
                colorize:true,
                level: process.env.NODE_ENV === 'development' ? 'debug' : 'error',
                label:path
            })
        ]
    });
}

module.exports = getLogger;