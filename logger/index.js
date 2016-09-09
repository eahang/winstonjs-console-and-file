var winston = require("winston");

winston.loggers.add('info', {
    console: {
      level: winston.level,
      colorize: true,
      label: 'category one'
    },








    file: {
        level: winston.level,
        colorize: 'true',
        filename: __dirname + '/../logs/info/info.log',
        datePattern: '.yyyy-MM-dd',
        //maxsize: 20000,
        json: false

        
    },
    DailyRotateFile: {
        level: winston.level,
        colorize: 'true',





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















module.exports = logger;

module.exports = winston.loggers.get('info');

