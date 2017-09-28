var app = angular.module('main', ["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider
  .when('/championships', {
    templateUrl:'templates/championships.template.html',
    controller:'championshipscontroler'
  })
  .when('/teams', {
    templateUrl:'templates/teams.template.html',
    controller:'teamscontroler'
  });
});

app.controller('championshipscontroler', function($scope, $http) {
  $http.get("https://footballbet.com.ua/api/championships/")
  .then(function(response) {
      $scope.countries = response.data.result;
  });
});


app.controller('teamscontroler', function($scope, $http) {
  $http.get("https://footballbet.com.ua/api/teams/")
  .then(function(response) {
      $scope.teams = response.data.result;
  });
});