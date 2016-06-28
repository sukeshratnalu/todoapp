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
        dc.selectedPriority=[];
        dc.filterTask=filterTask;
        dc.deleteTask=deleteTask;
        dc.checkSelect=checkSelect;

        var promise = dashboardService.readTasks();
        promise.then(function(response) {

            $rootScope.totalTasks=response;

            dc.tasks=$rootScope.totalTasks;

        }, function(reason) {
            alert('Failed: ' + reason);
        });
        $scope.priorityList = [
            { name:'High', value : 'HIGH'},
            { name:'Medium',value : "MEDIUM"},
            { name:'Low',value : "LOW"}

        ];


        $scope.statusList = [
            { name:'Opened' ,value: 'OPENED'},
            { name:'Inprogress', value:'INPROGRESS'},
            { name:'Invalid' ,value:'INVALID'},
            { name:'Completed', value:'COMPLETED'}

        ];


        function filterTask(){
            dc.tasks =[];
            var notFilteredTasks = $rootScope.totalTasks;
            var status = undefined;
            if ( dc.selectedStatus ) {
                status = dc.selectedStatus.value.value;
            }

            var priorities = undefined;
            if (dc.selectedPriority.length>0) {
                priorities = [];
                angular.forEach(dc.selectedPriority, function(priority){
                    priorities.push(priority.value);
                })
            }

            var filteredTasks = [];
            angular.forEach(notFilteredTasks, function(task){
                if (status && priorities && task.status === status && priorities.indexOf(task.priority) !== -1) {
                    filteredTasks.push(task);
                } else if (!priorities && status && task.status === status )  {
                    filteredTasks.push(task);
                } else if ( !status && priorities && priorities.indexOf(task.priority) !== -1) {

                    filteredTasks.push(task);
                }
            });

            if (  status || priorities  ) {
                dc.tasks=filteredTasks;
            } else {
                dc.tasks=$rootScope.totalTasks;
            }
        }


        function deleteTask(name) {

            dc.openDeleteModal(name);

        }

        function checkSelect(name){

            dc.openCheckModal(name);


        }




        dc.items = ['Are you want to delete the task?'];

        dc.animationsEnabled = true;

        dc.openDeleteModal = function (name) {

            var modalInstance = $uibModal.open({
                animation: dc.animationsEnabled,
                templateUrl: 'partials/deleteModal.html',
                controller: function($uibModalInstance ,$scope,items){

                    $scope.items = items;
                    $scope.selected = {
                        item: $scope.items[0]
                    };
                    $scope.ok = function () {

                        var deleteTask = dc.tasks;

                        for (var i = 0; i < deleteTask.length; i++) {
                            if (deleteTask[i].name == name) {
                                deleteTask.splice(i, 1);
                            }
                        }
                        dc.tasks = deleteTask;
                        $uibModalInstance.close($scope.selected.item);
                    };

                    $scope.cancel = function () {
                        $uibModalInstance.dismiss('cancel');
                    };

                },

                resolve: {
                    items: function () {
                        return dc.items;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                dc.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };


        dc.items = ['Do you want to make as complete?'];

        dc.openCheckModal = function (name) {

            var modalInstance = $uibModal.open({
                animation: dc.animationsEnabled,
                templateUrl: 'partials/checkModal.html',
                controller: function($uibModalInstance ,$scope,items){

                    $scope.items = items;
                    $scope.selected = {
                        item: $scope.items[0]
                    };
                    $scope.ok = function () {

                        var checkTask=dc.tasks;


                            for (var i = 0; i < checkTask.length; i++) {
                                if (checkTask[i].name === name) {
                                    checkTask[i].status="COMPLETED";
                                }
                            }
                            dc.tasks = checkTask;


                        $uibModalInstance.close($scope.selected.item);
                    };

                    $scope.cancel = function () {
                        $uibModalInstance.dismiss('cancel');
                    };

                },

                resolve: {
                    items: function () {
                        return dc.items;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                dc.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };


        dc.toggleAnimation = function () {
            dc.animationsEnabled = !dc.animationsEnabled;
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