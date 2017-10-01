app.controller('teamscontroler', function($scope, $http, $routeParams) {
  $http.get("https://footballbet.com.ua/api/teams/")
  .then(function(response) {
      $scope.teams = response.data.result;
      $scope.teamNumber = $routeParams.team_number;
  });
});