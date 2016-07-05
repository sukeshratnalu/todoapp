/**
 * Created by semanticbits on 29/6/16.
 */
(function() {
    angular
        .module('todoApp')
        .directive('taskDescription', taskDescription);
    //injecting dependency taskDescription
    taskDescription.$inject=['$uibModal','$rootScope'];
    function taskDescription($uibModal,$rootScope){

        console.log("i m in directive");
        function dynamicOperation(scope) {
            //getting total tasks for delete operation
            scope.tasks=$rootScope.totalTasks;
            //function for delete tasks
            scope.deleteTasks = function(name) {
                scope.openDeleteModal(name);
            };
            //function for mark as complete
            scope.markAsCompleteTask=function(name){
                scope.openMarkAsCompleteModal(name);
            };
            //function for edit task
            scope.editTask=function(id){
                scope.openEditTaskModal(id);
            };
            //logic for delete task and open delete modal
            scope.openDeleteModal = function (name) {
                var modalInstance = $uibModal.open({
                    animation: scope.animationsEnabled,
                    templateUrl: 'partials/deleteModal.html',
                    controller: function($uibModalInstance ,$scope){
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
                            $uibModalInstance.dismiss('cancel');
                        };

                        $scope.cancel = function () {
                            $uibModalInstance.dismiss('cancel');
                        };

                    }

                });

            };
            //logis for mark as complete and creating mark as complete modal
            scope.openMarkAsCompleteModal = function (name) {
                var modalInstance = $uibModal.open({
                    animation: scope.animationsEnabled,
                    templateUrl: 'partials/markAsCompleteModal.html',
                    controller: function($uibModalInstance ,$scope){

                        $scope.ok = function () {
                            var makeAsComplete=scope.tasks;
                            for (var i = 0; i < makeAsComplete.length; i++) {
                                if (makeAsComplete[i].name === name) {
                                    makeAsComplete[i].status="COMPLETED";
                                    break;
                                }
                            }
                            scope.tasks = makeAsComplete;
                            $uibModalInstance.dismiss('cancel');
                            /*$uibModalInstance.close(scope.selected.item);*/
                        };
                        $scope.cancel = function () {
                            $uibModalInstance.dismiss('cancel');
                        };
                    }

                });

            };
            //logic for creating edit modal and edit task


            scope.openEditTaskModal=function(id){
                var modalInstance=$uibModal.open({
                    animation: scope.animationsEnabled,
                    templateUrl: 'partials/editTaskModal.html',
                    controller: function($uibModalInstance, $scope){
                        var taskList=scope.tasks;
                        $scope.taskForEdit={
                            "taskName": "",
                            "description": "",
                            "startDate": "",
                            "endDate": "",
                            "status": {},
                            "priority":{}
                        };
                        angular.forEach(taskList, function(task){
                            if(task.id===id){
                                console.log("hi id is same");
                                $scope.taskForEdit.taskName=task.name;
                                $scope.taskForEdit.description=task.description;
                                $scope.taskForEdit.startDate=task.startdate;
                                $scope.taskForEdit.endDate=task.enddate;
                                console.log($scope.taskForEdit.endDate);
                                console.log(task.enddate);
                                $scope.taskForEdit.status.value=task.status;
                                $scope.taskForEdit.priority.value=task.priority;

                            }
                        });
                        $scope.ok= function(){
                            angular.forEach(taskList, function(task){
                                if(task.id===id){
                                    task.name=$scope.taskForEdit.taskName;
                                    task.description=$scope.taskForEdit.description;
                                    task.status=$scope.taskForEdit.status.value;
                                    task.startdate=$scope.taskForEdit.startDate;
                                    task.enddate=$scope.taskForEdit.endDate;
                                    task.priority=$scope.taskForEdit.priority.value;
                                }
                            });
                            $uibModalInstance.dismiss('cancel');
                        };
                        $scope.cancel = function () {
                            $uibModalInstance.dismiss('cancel');
                        };
                    }
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