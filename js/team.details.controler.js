app.controller('teamDetailsControler', function($scope, $routeParams, DataFactory) {
  $scope.Data = DataFactory;
  $scope.Data.getApi("teams");
  for (var i = 0; i < $scope.Data.teams.length; i++) {
    if ($scope.Data.teams[i].id_teams === $routeParams.team_number) {
      $scope.teamNumber = i;      
    };
  };
});