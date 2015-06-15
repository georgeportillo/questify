'use strict';

angular.module('questifyApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.sent = false;
    $scope.sending = false;
    $scope.getNotified = function() {
      $scope.sending = true;
      console.log("Notifying...");
      $http.post('/api/notifications/getNotified', $scope.email)
      .success(function(data) {
        console.log(data);
        $scope.sent = true;
      });
    }
  });
