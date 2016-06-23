/**
 * Created by semanticbits on 17/6/16.
 */

(function(){
    angular
        .module('todoApp')
        .controller('appController',appController);

    appController.$inject=['$scope','$q','$rootScope','dashboardService','$translate'];

    function appController($scope,$q,$rootScope,dashboardService,$translate){
        var ac = this;

        ac.changeLanguage = function (key) {
            $translate.use(key)
        };
    }

}());

