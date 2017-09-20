var app = angular.module('main', []);
app.controller('championships', function($scope, $http) {
  $http.get("https://footballbet.com.ua/api/championships/")
  .then(function(response) {
      $scope.countries = response.data.result;
  });
});