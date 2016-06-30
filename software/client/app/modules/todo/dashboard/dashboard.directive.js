/**
 * Created by semanticbits on 29/6/16.
 */
(function() {
    angular
        .module('todoApp')
        .directive('taskDescription', taskDescription);
    //injecting dependency
    taskDescription.$inject=['$uibModal','$rootScope'];

    function taskDescription($uibModal,$rootScope){

        console.log("i m in directive");
        function dynamicOperation(scope, element, attrs) {
            //getting total tasks for delete operation
            scope.tasks=$rootScope.totalTasks;
            //function for delete tasks
            scope.deleteTasks = function(name) {
                scope.openDeleteModal(name);
            };
            //logic for delete task and creating delete modal
            scope.items = ['Are you want to delete the task?'];
            scope.animationsEnabled = true;
            scope.openDeleteModal = function (name) {
                var modalInstance = $uibModal.open({
                    animation: scope.animationsEnabled,
                    templateUrl: 'partials/deleteModal.html',
                    controller: function($uibModalInstance ,$scope,items){

                        scope.items = items;
                        scope.selected = {
                            item: scope.items[0]
                        };
                        $scope.ok = function () {

                            var deleteTask = scope.tasks;
                            for (var i = 0; i < deleteTask.length; i++) {
                                if (deleteTask[i].name == name) {
                                    deleteTask.splice(i, 1);
                                    break;
                                }
                                console.log(deleteTask[i].name);
                            }
                            scope.tasks = deleteTask;
                            $uibModalInstance.close(scope.selected.item);
                        };

                        $scope.cancel = function () {
                            $uibModalInstance.dismiss('cancel');
                        };

                    },
                    resolve: {
                        items: function () {
                            return scope.items;
                        }
                    }
                });
                modalInstance.result.then(function (selectedItem) {
                    scope.selected = selectedItem;
                }, function () {
                    $log.info('Modal dismissed at: ' + new Date());
                });
            };
            //function for mark as complete
            scope.markAsCompleteTask=function(name){
                scope.openMarkAsCompleteModal(name);
            };
            //logis for mark as complete and creating mark as complete modal
            scope.items = ['Do you want to make as complete?'];
            scope.openMarkAsCompleteModal = function (name) {
                var modalInstance = $uibModal.open({
                    animation: scope.animationsEnabled,
                    templateUrl: 'partials/markAsCompleteModal.html',
                    controller: function($uibModalInstance ,$scope,items){
                        scope.items = items;
                        scope.selected = {
                            item: scope.items[0]
                        };
                        $scope.ok = function () {
                            var makeAsComplete=scope.tasks;
                            for (var i = 0; i < makeAsComplete.length; i++) {
                                if (makeAsComplete[i].name === name) {
                                    makeAsComplete[i].status="COMPLETED";
                                    break;
                                }
                            }
                            scope.tasks = makeAsComplete;
                            $uibModalInstance.close(scope.selected.item);
                        };
                        $scope.cancel = function () {
                            $uibModalInstance.dismiss('cancel');
                        };
                    },
                    resolve: {
                        items: function () {
                            return scope.items;
                        }
                    }
                });
                modalInstance.result.then(function (selectedItem) {
                    scope.selected = selectedItem;
                }, function () {
                    $log.info('Modal dismissed at: ' + new Date());
                });
            };

        }
        return{
            restrict: 'EA',
            templateUrl:'partials/tasksDetails.html',
            scope:{
                tasks:'='
            },
            link:dynamicOperation

        }

    }
}());