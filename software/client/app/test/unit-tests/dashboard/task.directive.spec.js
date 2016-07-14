/**
 * Created by semanticbits on 2/7/16.
 */
(function(){
    describe('test task directive',function(){
        var $compile,
            $scope,
            rootScope,
            $templateCache;

        var task=[
            {
                "name": "Task 1",
                "description": "Task 1 description",
                "startdate": "01-08-2016",
                "enddate": "01-10-2016",
                "status": "OPENED",
                "priority": "LOW"
            },
            {
                "name"  : "Task 2",
                "description"   : "Task 2 description",
                "startdate" : "01-08-2016",
                "enddate"   : "01-10-2016",
                "status"    : "OPENED",
                "priority"  : "HIGH"
            }
        ];

        beforeEach(module('todoApp'));

        beforeEach(inject(function($rootScope, _$compile_, $httpBackend, _$templateCache_){

            $compile = _$compile_;
            rootScope = $rootScope;
            $scope = $rootScope.$new();
            $templateCache = _$templateCache_;

            $templateCache.put('partials/tasksDetails.html');
            $httpBackend.whenGET('partials/tasksDetails.html').respond($templateCache.get('partials/tasksDetails.html'));

        }));

        function directiveElement(){
            var element = $compile('<task-description tasks="task"></task-description>')($scope);
            $scope.$digest();
            return element;
        }

        it('Testing dashboard directive', inject(function ($httpBackend, $location) {
            var element = directiveElement();
            $scope.$digest();
            expect(element[0].outerHTML).toEqual('<task-description class="ng-scope" tasks="t"></task-description>');
        }));

    });
}());