//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/jquery/dist/jquery.min.js',

      'bower_components/angular-ui-router/release/angular-ui-router.min.js',
      'bower_components/angular-translate/angular-translate.min.js',
      'bower_components/angular-sanitize/angular-sanitize.min.js',
      'bower_components/angular-ui-select/dist/select.min.js',
      'bower_components/angular-bootstrap/ui-bootstrap.min.js',
      'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
      'bower_components/Chart.js/Chart.js',

      'modules/todo/app.modules.js',
      'modules/todo/*.js',
      'modules/**/*.js',
      /*'test/unit-tests/!**!/!*.js',*/
      'test/unit-tests/dashboard/dashboard.controller.spec.js',
      'test/unit-tests/dashboard/task.directive.spec.js'
      /*'test/unit-tests/dashboard/filter.directive.spec.js'*/
    ],

    preprocessors: {
      'app/**/*.js': ['coverage'],
      'app/partials/**/*.html': ['html2js']
    },


    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['PhantomJS'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-junit-reporter',
      'karma-htmlfile-reporter',
      'karma-coverage',
      'karma-ng-html2js-preprocessor'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
