app.controller('teamscontroler', function($scope, $http, $routeParams) {
  $http.get("https://footballbet.com.ua/api/teams/")
  .then(function(response) {
      $scope.teams = response.data.result;
      for (i = 0; i < $scope.teams.length; i++) {
        if ($scope.teams[i].id_teams === $routeParams.team_number) $scope.teamNumber = i;
      };
  });
});