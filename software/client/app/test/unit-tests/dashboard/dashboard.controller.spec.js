describe('dashboardController', function(){

    var scope,controller,httpBackend,dashboardSrv;
    console.log("hi........");
    /* beforeEach( function(){
     console.log("in beforeEach...");
     });*/
    beforeEach(module('todoApp'));

    beforeEach(inject(function($rootScope,$controller,$httpBackend,dashboardService){

        scope=$rootScope.new();
        httpBackend=$httpBackend;
        dashboardSrv=dashboardService;
        controller = $controller('dashBoardController', { $scope: scope, dashboardService:dashboardSrv });
        httpBackend.flush();
        /*console.log(controller+"-----------");*/
    }));

    it('Test DashBoardController', inject(function($controller) {
        console.log("test");
        expect(controller).toBeDefined();
    }));
    it('Test sum function', inject(function($controller) {

        expect(scope.sum(2,3)).toEqual(5);
    }));
    it('Test getTasks function', inject(function($controller,$httpBackend) {

        httpBackend.expectGET("tasks.json").respond("Response found!");
        httpBackend.flush();
    }));

});
