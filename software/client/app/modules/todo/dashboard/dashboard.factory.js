/**
 * Created by semanticbits on 17/6/16.
 */

(function(){
    angular.module('todoApp')
        .factory('dashboardService',dashboardService);
    dashboardService.$inject=['$http','$rootScope','$q'];
    function dashboardService($http, $rootScope,$q){
        var factory = {
            readTasks: getTasks
        };
        return factory;
        //getting tasks from tasks.json
        function getTasks() {
            /*perform some asynchronous operation, resolve or reject the promise when appropriate.*/
            return $q(function(resolve, reject) {
                    $http.get('tasks.json',{header : {'Content-Type' : 'application/json; charset=UTF-8'}}).
                    success(function (response) {
                        resolve(response);
                    });
            });
        }
    }
}());

