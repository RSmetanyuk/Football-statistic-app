var app = angular.module('main', ["ngRoute", "angularUtils.directives.dirPagination"]);

app.config(function($routeProvider){
  $routeProvider
  .when('/championships', {
    templateUrl:'templates/championships.template.html',
    controller:'championshipscontroler'
  })
  .when('/championships/:id_championship', {
    templateUrl:'templates/championships.detail.template.html',
    controller:'championshipscontroler'
  })
  .when('/teams', {
    templateUrl:'templates/teams.template.html',
    controller:'teamscontroler'
  })
  .when('/teams/:team_number', {
    templateUrl:'templates/teams.detail.template.html',
    controller:'teamscontroler'
  })
  .when('/matches', {
    templateUrl:'templates/matches.template.html',
    controller:'matchescontroler'
  })
  .when('/matches/:id_match', {
    templateUrl:'templates/matches.detail.template.html',
    controller:'matchescontroler'
  })
  .when('/about', {
    templateUrl:'templates/about.template.html'
  });
});