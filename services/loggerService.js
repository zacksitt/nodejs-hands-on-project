var winston = require('winston');
  require('winston-daily-rotate-file');
  const logFormat = winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.align(),
    winston.format.printf(
     info => `${info.timestamp} ${info.level}: ${info.message}`,
   ),);
  var transport = new winston.transports.DailyRotateFile({
    filename: 'logs/application-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d'
  });

  transport.on('rotate', function(oldFilename, newFilename) {
    // do something fun
  });

  var logger = winston.createLogger({
    format:logFormat,
    transports: [
      transport
    ]
  });

  module.exports = logger;