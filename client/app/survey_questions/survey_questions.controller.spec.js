'use strict';

describe('Controller: SurveyQuestionsCtrl', function () {

  // load the controller's module
  beforeEach(module('questifyApp'));

  var SurveyQuestionsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SurveyQuestionsCtrl = $controller('SurveyQuestionsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
