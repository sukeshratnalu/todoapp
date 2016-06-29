/**
 * Created by semanticbits on 28/6/16.
 */

(function(){
    angular
        .module('todoApp')
        .controller('chartController',chartController);

    chartController.$inject=['$scope','$rootScope'];

    function chartController($scope,$rootScope){

        var ch = this;

        ch.tasks=$rootScope.totalTasks;
        ch.Chart = {};
        ch.Chart.openCount=0;
        ch.Chart.inprogressCount=0;
        ch.Chart.invalidCount=0;
        ch.Chart.completedCount=0;
        ch.Chart.highPriorityCount=0;
        ch.Chart.lowPriorityCount=0;
        ch.Chart.mediumPriorityCount=0;


        angular.forEach(ch.tasks, function(task) {
            if(task.status==='OPENED'){
                ch.Chart.openCount++;
            }
            else if(task.status==='INPROGRESS'){
                ch.Chart.inprogressCount++;
            }
            else if(task.status==='INVALID'){
                ch.Chart.invalidCount++;
            }
            else if(task.status==='COMPLETED'){
                ch.Chart.completedCount++;
            }

        });
        angular.forEach(ch.tasks, function(task) {
            if(task.priority==='HIGH'){
                ch.Chart.highPriorityCount++;
            }
            else if(task.priority==='LOW'){
                ch.Chart.lowPriorityCount++;
            }
            else if(task.priority==='MEDIUM'){
                ch.Chart.mediumPriorityCount++;
            }
        });
        console.log(ch.Chart.openCount);
        console.log(ch.Chart.inprogressCount);
        console.log(ch.Chart.invalidCount);
        console.log(ch.Chart);
        console.log( ch.Chart.mediumPriorityCount);
        console.log(ch.Chart.highPriorityCount);


        ch.labels = ["Opened Tasks", "Inprogress Tasks", "Invalid Tasks","Completed Tasks"];
        ch.data = [ch.Chart.openCount, ch.Chart.inprogressCount,ch.Chart.invalidCount,ch.Chart.completedCount];

        $scope.labels = [];
        $scope.series = ['High Priority Task', 'Medium Priority Tasks','Low Priority Tasks'];

        $scope.data = [
            [ch.Chart.highPriorityCount],[ch.Chart.mediumPriorityCount], [ch.Chart.lowPriorityCount]

        ];

    }

}());
