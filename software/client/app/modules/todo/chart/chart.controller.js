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
        ch.pieChart = {};
        ch.pieChart.openCount=0;
        ch.pieChart.inprogressCount=0;
        ch.pieChart.invalidCount=0;
        ch.pieChart.completedCount=0;


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
        console.log(ch.pieChart.openCount);
        console.log(ch.pieChart.inprogressCount);
        console.log(ch.pieChart.invalidCount);
        console.log(ch.pieChart);


        ch.labels = ["Opened Tasks", "Inprogress Tasks", "Invalid Tasks","Completed Tasks"];
        ch.data = [ch.pieChart.openCount, ch.pieChart.inprogressCount,ch.pieChart.invalidCount,ch.pieChart.completedCount];


    }

}());
