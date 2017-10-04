app.controller('teamDetailsControler', function($scope, $routeParams, DataFactory) {
  $scope.Data = DataFactory;
  if ($scope.Data.teams === undefined) $scope.Data.getApi("teams");
  for (var i = 0; i < $scope.Data.teams.length; i++) {
    if ($scope.Data.teams[i].id_teams === $routeParams.team_number) {
      $scope.teamNumber = i;      
    };
  };
});