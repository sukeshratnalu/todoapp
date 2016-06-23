/**
 * Created by semanticbits on 17/6/16.
 */

(function(){
    angular.module('todoApp')
        .factory('dashboardService',dashboardService);

    dashboardService.$inject=['$http','$rootScope','$q'];

    function dashboardService($http, $rootScope,$q){
      /* console.log("coming here");
        var factory = {
            readTasks: getTasks
        };

        return factory;

        function getTasks() {
            $http.get('tasks.json').success(function (response) {
                 $rootScope.tasks = response;
            });
        }*/
        var factory = {

            readTasks: getTasks
        };

        return factory;

        function getTasks() {

            /*perform some asynchronous operation, resolve or reject the promise when appropriate.*/
            return $q(function(resolve, reject) {



                    $http.get('tasks.json').success(function (response) {

                        resolve(response);

                    });


            });
        }



    }
}());

