/**
 * Created by semanticbits on 17/6/16.
 */

(function(){
    angular
        .module('todoApp')
        .controller('dashboardController',dashboardController);
     //injecting dependency to dashboard controller
    dashboardController.$inject=['$scope','$q','$rootScope','dashboardService'];
    function dashboardController($scope,$q,$rootScope,dashboardService){
        var dc = this;
        dc.tasks=[];
        dc.prioritiesList = [
            { name:'High', value : 'HIGH'},
            { name:'Medium',value : "MEDIUM"},
            { name:'Low',value : "LOW"}
        ];
        dc.statusList = [
            { name:'Opened' ,value: 'OPENED'},
            { name:'Inprogress', value:'INPROGRESS'},
            { name:'Invalid' ,value:'INVALID'},
            { name:'Completed', value:'COMPLETED'}
        ];


        //function for getting tasks from service
        dc.getTasks=function(){
            //getting tasks from services
            var promise = dashboardService.readTasks();
            promise.then(function(response) {

                $rootScope.totalTasks=response;

                dc.tasks=$rootScope.totalTasks;

            }, function(reason) {
                alert('Failed: ' + reason);
            });
        };
        dc.getTasks();



        dc.sum = function(a,b) {

            return a+b;
        };



    }
}());

/* $scope.$watch('selectedPriority.priority', function(val)
 {
 filterTasks(val, undefined);
 });
 $scope.$watch('selected.value.value', function(val)
 {
 filterTasks(undefined,val);
 });
 function filterTasks(priorities, status) {
 dc.tasks = $rootScope.totalTasks;
 if(priorities) {
 var multiValues = [];
 for( var i=0;i< priorities.length;i++) {
 multiValues.push(priorities[i].value);
 }
 dc.tasks = $filter('filter')(dc.tasks, function(eachTask, index, array){
 return multiValues.indexOf(eachTask.priority) > -1;
 });
 }
 if(status) {
 dc.tasks = $filter('filter')(dc.tasks, status);
 }

 }*/