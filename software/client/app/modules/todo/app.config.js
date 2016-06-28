/**
 * Created by semanticbits on 17/6/16.
 */
angular.module('todoApp')


    .config(function($stateProvider,$urlRouterProvider,$locationProvider,$translateProvider, $translateStaticFilesLoaderProvider){

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('dashboard',{
                url:'/',
                templateUrl: 'partials/dashboard.html',
                controller: 'dashboardController',
                controllerAs: 'dc'
            }).
        state('chart', {
            url: "/chart",
            templateUrl: "partials/chart.html",
            controller: 'chartController',
            controllerAs: 'ch'
        });
        $locationProvider.html5Mode(true);

        $translateProvider.useStaticFilesLoader({
            prefix: 'locale-',
            suffix: '.json'
        });

        $translateProvider.preferredLanguage('en');
        $translateProvider.useSanitizeValueStrategy('sanitizeParameters');



    });



