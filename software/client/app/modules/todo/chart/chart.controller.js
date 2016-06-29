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
        //pieChart variable for storing status count
        ch.pieChart = {
            openCount:0,
            inprogressCount:0,
            invalidCount:0,
            completedCount:0
        };
        //bar chart variables for storing priority count
        ch.barChart={
            highPriorityCount:0,
            lowPriorityCount:0,
            mediumPriorityCount:0
        };
        //getting status counts
        angular.forEach(ch.tasks, function(task) {
            if(task.status==='OPENED'){
                ch.pieChart.openCount++;
            }
            else if(task.status==='INPROGRESS'){
                ch.pieChart.inprogressCount++;
            }
            else if(task.status==='INVALID'){
                ch.pieChart.invalidCount++;
            }
            else if(task.status==='COMPLETED'){
                ch.pieChart.completedCount++;
            }

        });
        //getting priority counts
        angular.forEach(ch.tasks, function(task) {
            if(task.priority==='HIGH'){
                ch.barChart.highPriorityCount++;
            }
            else if(task.priority==='LOW'){
                ch.barChart.lowPriorityCount++;
            }
            else if(task.priority==='MEDIUM'){
                ch.barChart.mediumPriorityCount++;
            }
        });
        //setting status name and status count for pie chart
        ch.labels = ["Opened Tasks", "Inprogress Tasks", "Invalid Tasks","Completed Tasks"];
        ch.data = [ch.pieChart.openCount, ch.pieChart.inprogressCount,ch.pieChart.invalidCount,ch.pieChart.completedCount];
        //setting priority name and priority count for bar chart
        ch.barLabels = [];
        ch.series = ['High Priority Task', 'Medium Priority Tasks','Low Priority Tasks'];

        ch.barData = [
            [ch.barChart.highPriorityCount],[ch.barChart.mediumPriorityCount], [ch.barChart.lowPriorityCount]

        ];
        ch.colors=['#ff6666','#80d4ff','#9fdfbf'];

    }

}());
