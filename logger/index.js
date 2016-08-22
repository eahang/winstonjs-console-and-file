var winston = require("winston");

if(process.env == 'production') {
    winston.level = 'info';
}
else {
    winston.level = 'debug';
}
  
winston.loggers.add('info', {
    console: {
      colorize: true,
      label: 'category one'
    },
    file: {
            colorize: 'true',
            filename: __dirname + '/../logs/info/info.log',
            datePattern: '.yyyy-MM-dd',
            //maxsize: 20000,
            json: false
        
    },
    DailyRotateFile: {
        colorize: 'true',
            filename: __dirname + '/../logs/info/info.log',
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


module.exports = winston.loggers.get('info');