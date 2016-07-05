/**
 * Created by semanticbits on 2/7/16.
 */
describe('dashboardController function check', function(){
    /*var controller;
    var scope;
    var timeout;
    var $httpBackend;*/

    var $controller;
   /* beforeEach(module('todoApp'));
    beforeEach(inject(function($controller,$rootScope,$timeout,$http){
        console.log("hi");
        scope=$rootScope.$new();
        timeout=$timeout;
        $httpBackend= $http;

    }));

    it('say hi',function(){
        console.log("it");
        controller=$controller('dashboardController',{
            $scope:scope
        });
        expect(scope.sum(10,10)).toEqual(20);

    })*/
    var $scope, ctrl, $timeout;
    beforeEach(function (){
        module('todoApp');
        console.log("hi.................");
        inject(function($rootScope, $controller,_$timeout_) {


            $scope = $rootScope.$new();
            $timeout = _$timeout_;
            ctrl = $controller('dashboardController', {
                $scope: $scope

            });
        });
    });
    it('say hi',function(){

        expect(scope.sum(10,10)).toEqual(20);
    });

});

