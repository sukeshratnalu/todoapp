/**
 * Created by semanticbits on 17/6/16.
 */
angular
    .module('todoApp')
    .config(['$routeProvider', '$locationProvider', function($routeProvider,$locationProvider){
        $routeProvider

            .when('/',{
                templateUrl:'../../partials/English.html',
                controller:'dashboardController'
            })

            .when('/dashboard',{
                templateUrl:'../../partials/dashboard.html',
                controller:'dashboardController'
            })


            .when('/English',{
                templateUrl:'../../partials/English.html'

            })
            .when('/Spanish',{
                templateUrl:'../../partials/Spanish.html'

            })

            .otherwise({
                redirectTo:'/dashboard'
            });

        $locationProvider.html5Mode(true);
    }]);