/**
 * Created by semanticbits on 4/7/16.
 */
describe('filterTasks', function() {
    var $compile,
        $rootScope;

    // Load the todoApp module, which contains the directive
    beforeEach(module('todoApp'));

    // Store references to $rootScope and $compile
    // so they are available to all tests in this describe block
    beforeEach(inject(function($compile, _$rootScope_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('Replaces the element with the appropriate content', function() {
        // Compile a piece of HTML containing the directive
        var element = $compile("<filter-tasks></filter-tasks>")($rootScope);
        // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
        $rootScope.$digest();
        // Check that the compiled element contains the templated content
        expect(element.html()).toContain("<div><filter-tasks></filter-tasks></div>");
    });
});
