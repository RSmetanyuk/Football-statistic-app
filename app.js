var app = angular.module('main', ["ngRoute", "angularUtils.directives.dirPagination"]);

app.config(function($routeProvider){
  $routeProvider
  .when('/championships', {
    templateUrl:'templates/championships.template.html',
    controller:'js/championshipscontroler'
  })
  .when('/championships/:id_championship', {
    templateUrl:'templates/championships.detail.template.html',
    controller:'js/championshipscontroler'
  })
  .when('/teams', {
    templateUrl:'templates/teams.template.html',
    controller:'js/teamscontroler'
  })
  .when('/teams/:team_number', {
    templateUrl:'templates/teams.detail.template.html',
    controller:'js/teamscontroler'
  })
  .when('/matches', {
    templateUrl:'templates/matches.template.html',
    controller:'js/matchescontroler'
  })
  .when('/matches/:id_match', {
    templateUrl:'templates/matches.detail.template.html',
    controller:'js/matchescontroler'
  })
  .when('/about', {
    templateUrl:'templates/about.template.html'
  });
});