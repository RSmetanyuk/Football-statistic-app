var app = angular.module('main', ["ngRoute", "angularUtils.directives.dirPagination", "ngSanitize"]);

app.config(function($routeProvider){
  $routeProvider
  .when('/championships', {
    templateUrl:'templates/championships.template.html',
    controller:'championshipsControler'
  })
  .when('/championships/:id_championship', {
    templateUrl:'templates/championships.detail.template.html',
    controller:'championshipDetailsControler'
  })
  .when('/teams', {
    templateUrl:'templates/teams.template.html',
    controller:'teamsControler'
  })
  .when('/teams/:team_number', {
    templateUrl:'templates/teams.detail.template.html',
    controller:'teamDetailsControler'
  })
  .when('/matches', {
    templateUrl:'templates/matches.template.html',
    controller:'matchesControler'
  })
  .when('/matches/:id_match', {
    templateUrl:'templates/matches.detail.template.html',
    controller:'matchDetailsControler'
  })
  .when('/about', {
    templateUrl:'templates/about.template.html'
  }).
  otherwise({
    redirectTo: '/championships'
  });
});

app.factory('DataFactory', function($http){
  var Data = {};
  Data.getApi = function(database) {
    $http.get("https://footballbet.com.ua/api/".concat(database, "/"))
    .then(function(response) {
      Data[database] = response.data.result;    
    });
  };
  return Data;
});