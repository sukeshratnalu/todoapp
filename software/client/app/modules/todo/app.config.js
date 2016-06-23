/**
 * Created by semanticbits on 17/6/16.
 */
angular.module('todoApp')


    .config(function($stateProvider,$urlRouterProvider,$locationProvider,$translateProvider, $translateStaticFilesLoaderProvider){

            $urlRouterProvider.otherwise('/dashboard');

            $stateProvider
                .state('dashboard',{
                        url:'/dashboard',
                        templateUrl: 'partials/dashboard.html',
                        controller: 'dashboardController'
                });
            $locationProvider.html5Mode(true);

           $translateProvider.useStaticFilesLoader({
            prefix: 'locale-',
            suffix: '.json'
           });

        $translateProvider.preferredLanguage('en');
        $translateProvider.useSanitizeValueStrategy('sanitizeParameters');



    });



