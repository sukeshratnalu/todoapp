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
        'modules/todo/app.config.js',
        'modules/todo/dashboard/dashboard.factory.js',
        'modules/todo/dashboard/dashboard.controller.js',
        'modules/todo/dashboard/filter.directive.js',
        'test/unit-tests/dashboard/dashboard.controller.spec.js',
        'test/unit-tests/dashboard/filter.directive.spec.js'
    ],


    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Firefox'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
