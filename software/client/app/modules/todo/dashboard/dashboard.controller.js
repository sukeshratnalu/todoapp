/**
 * Created by semanticbits on 17/6/16.
 */

(function(){
    angular
        .module('todoApp')
        .controller('dashboardController',dashboardController);

    dashboardController.$inject=['$scope','$q','$rootScope','dashboardService','$translate','$filter'];

    function dashboardController($scope,$q,$rootScope,dashboardService,$translate,$filter){
        var dc = this;


        /*dashboardService.readTasks();*/

        var promise = dashboardService.readTasks();
        promise.then(function(response) {
            $rootScope.totalTasks=response;
            $scope.tasks=$rootScope.totalTasks;
        }, function(reason) {
            alert('Failed: ' + reason);
        });

        $scope.priorityList = [
            {id: 0,  name:"priority"},
            {id: 1,  name : "HIGH"},
            {id: 2,  name : "MEDIUM"},
            {id: 3,  name : "LOW"}

        ];
        $scope.selectedPriority={ value: $scope.priorityList[0] };

        $scope.itemArray = [
            { name: 'OPENED'},
            { name: 'INPROGRESS'},
            { name: 'INVALID'},
            { name: 'COMPLETED'}
        ];

        $scope.selected = { value: $scope.itemArray[0] };


        $scope.totalTasks=$rootScope.tasks;

        $scope.$watch('selectedPriority.value.name', function(val)
        {
            $scope.tasks = $filter('filter')($rootScope.totalTasks, val);
        });



    }

}());

