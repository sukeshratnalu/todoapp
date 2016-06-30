/**
 * Created by semanticbits on 17/6/16.
 */

(function(){
    angular
        .module('todoApp')
        .controller('dashboardController',dashboardController);


    dashboardController.$inject=['$scope','$q','$rootScope','dashboardService','$translate','$filter','$sce','$uibModal','$log'];

    function dashboardController($scope,$q,$rootScope,dashboardService,$translate,$filter,$sce,$uibModal,$log){
        var dc = this;
        dc.tasks=[];
        dc.selectedStatus={};
        dc.selectedPriorites=[];
        dc.filterTask=filterTask;
        dc.priorityList = [
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
        //getting tasks from services
        var promise = dashboardService.readTasks();
        promise.then(function(response) {

            $rootScope.totalTasks=response;

            dc.tasks=$rootScope.totalTasks;

        }, function(reason) {
            alert('Failed: ' + reason);
        });

        //function for filtering the task based on status and priority(single selecte for status and multiselect for priority)
        function filterTask(){
            dc.tasks =[];
            var notFilteredTasks = $rootScope.totalTasks;
            var status = undefined;
            if ( dc.selectedStatus ) {
                status = dc.selectedStatus.value;
            }

            var priorities = undefined;
            if (dc.selectedPriorites.length>0) {
                priorities = [];
                angular.forEach(dc.selectedPriorites, function(priority){
                    priorities.push(priority.value);
                })
            }
            var filteredTasks = [];
            angular.forEach(notFilteredTasks, function(task){
                console.log(status);
                if (status && priorities && task.status === status.value && priorities.indexOf(task.priority) !== -1) {
                    filteredTasks.push(task);
                } else if (!priorities && status && task.status === status.value )  {
                    console.log("selected status");
                    filteredTasks.push(task);
                } else if ( !status && priorities && priorities.indexOf(task.priority) !== -1) {

                    filteredTasks.push(task);
                }
            });

            if (  status || priorities  ) {
                dc.tasks=filteredTasks;
            } else {
                console.log("not select any thing");
                dc.tasks=$rootScope.totalTasks;
            }
        }


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