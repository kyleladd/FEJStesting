// Karma configuration
// Generated on Fri May 08 2015 21:55:21 GMT-0400 (Eastern Daylight Time)

module.exports = function(config) {
  var configuration = {
      // base path that will be used to resolve all patterns (eg. files, exclude)
      basePath: '',


      // frameworks to use
      // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
      frameworks: ['jasmine'],


      // list of files / patterns to load in the browser
      files: [
        'dist/*.js' , 'tests/*.js'
      ],


      // list of files to exclude
      exclude: [
      ],


      // preprocess matching files before serving them to the browser
      // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
      preprocessors: {
      },


      // test results reporter to use
      // possible values: 'dots', 'progress'
      // available reporters: https://npmjs.org/browse/keyword/karma-reporter
      reporters: ['progress'],


      // web server port
      port: 9876,


      // enable / disable colors in the output (reporters and logs)
      colors: true,


      // level of logging
      // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
      logLevel: config.LOG_INFO,


      // enable / disable watching file and executing tests whenever any file changes
      autoWatch: false,


      // start these browsers
      // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher

      customLaunchers: {
        Chrome_travis_ci: {
          base: 'Chrome',
          flags: ['--no-sandbox']
        }
      },

      // Continuous Integration mode
      // if true, Karma captures browsers, runs the tests and exits
      singleRun: false
    };

    if(process.env.TRAVIS){
      configuration.browsers = ['Chrome_travis_ci'];
    }
    else{
      configuration.browsers = ['Firefox','Chrome'];
    }


    config.set(configuration);
};
