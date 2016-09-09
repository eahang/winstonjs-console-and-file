var winston = require("winston");

winston.loggers.add('info', {
    console: {
      colorize: true,
      label: 'category one'
    },
    /*file: {
            colorize: 'true',
            filename: __dirname + '/../logs/info/info.log',
            datePattern: '.yyyy-MM-dd',
            //maxsize: 20000,
            json: false
        
    },*/
    DailyRotateFile: {
        colorize: 'true',
        filename: __dirname + '/../logs/development/info.log',
        datePattern: '.yyyy-MM-dd',
        //maxsize: 20000,
        json: false
    }
});
/*
winston.loggers.add('error', {
    DailyRotateFile: {
        colorize: 'true',
        filename: __dirname + '/../logs/error.log',
        datePattern: '.yyyy-MM-dd',
        //maxsize: 20000,
        json: false
    }
});*/


if(process.env == 'production') {
    winston.setLevels('info');
}
else {
    winston.setLevels('debug');
}

var logger = winston.loggers.get('info');


logger.info("[Testi]" + process.env);

module.exports = logger;