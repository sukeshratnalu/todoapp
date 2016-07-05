/**
 * Created by semanticbits on 29/6/16.
 */
(function() {
    angular
        .module('todoApp')
        .directive('filterTasks',filterTasks);
    //injecting dependency for filterTask directive
    filterTasks.$inject=['$rootScope'];
    function filterTasks($rootScope){
        function linker(scope) {
            scope.selectedStatus={};
            scope.selectedPriorites=[];
            scope.selectedPriorites.priority={};
            //function for filter tasks
            scope.filterTask=function(){
                scope.tasks =[];
                var notFilteredTasks = $rootScope.totalTasks;
                var status = undefined;
                if ( scope.selectedStatus ) {
                    status = scope.selectedStatus.value;
                }

                var priorities = undefined;
                if (scope.selectedPriorites.priority.length>0) {
                    priorities = [];
                    angular.forEach(scope.selectedPriorites.priority, function(priority){
                        priorities.push(priority.value);
                        console.log(priorities);
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

                        console.log("selectedPriorities");
                        filteredTasks.push(task);
                    }
                });

                if (  status || priorities  ) {
                    console.log("status or filter");

                    scope.tasks=filteredTasks;
                    console.log(scope.tasks);
                } else {
                    console.log("not select any thing");
                    scope.tasks=$rootScope.totalTasks;
                }

            }
        }
        return{
            restrict: 'E',
            templateUrl:'partials/filteredTask.html',
            scope:{
                tasks:'=',
                statusList:'=',
                prioritiesList:'='
            },
            link:linker
        }
    }
}());
