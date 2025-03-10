// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
const puppeteer = require('puppeteer');

module.exports = async function (config) {
  try {
    const browserPath = puppeteer.executablePath();

    config.set({
      basePath: '',
      frameworks: ['jasmine', '@angular-devkit/build-angular'],
      plugins: [
        require('karma-jasmine'),
        require('karma-chrome-launcher'),
        require('karma-jasmine-html-reporter'),
        require('karma-coverage'),
        require('@angular-devkit/build-angular/plugins/karma')
      ],
      client: {
        jasmine: {
          // you can add configuration options for Jasmine here
          // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
        },
        clearContext: false // leave Jasmine Spec Runner output visible in browser
      },
      jasmineHtmlReporter: {
        suppressAll: true // removes the duplicated traces
      },
      coverageReporter: {
        dir: require('path').join(__dirname, './coverage/pokemon-ssr'),
        subdir: '.',
        reporters: [
          { type: 'html' },
          { type: 'text-summary' }
        ]
      },
      reporters: ['progress', 'kjhtml'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      browsers: ['ChromeHeadlessCustom'],
      customLaunchers: {
        ChromeHeadlessCustom: {
          base: 'ChromeHeadless',
          flags: ['--no-sandbox', '--disable-gpu', '--headless=new'], // Añade --headless=new
          executablePath: browserPath,
        },
      },
      singleRun: false,
      restartOnFileChange: true
    });
  } catch (error) {
    console.error('Error detecting browser:', error);
    process.exit(1); // Exit with error code if browser detection fails
  }
};
