/**
 * Created by semanticbits on 17/6/16.
 */
(function(){
    angular
        .module('todoApp')
        .controller('dashboardController',function($scope,dashboardService){

                $scope.tasks=dashboardService.getTasks();


        })

}());

