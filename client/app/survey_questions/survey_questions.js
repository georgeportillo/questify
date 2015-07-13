'use strict';

angular.module('questifyApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/survey_questions', {
        templateUrl: 'app/survey_questions/survey_questions.html',
        controller: 'SurveyQuestionsCtrl'
      });
  });
