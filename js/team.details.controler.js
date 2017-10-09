app.controller('teamDetailsControler', function($scope, $routeParams, DataFactory) {
  $scope.Data = DataFactory;
  $scope.Data.showContent = false;
  $scope.Data.getApi("teams", function() {
    for (var i = 0; i < $scope.Data.teams.length; i++) {
      if ($scope.Data.teams[i].id_teams === $routeParams.team_number) {
        $scope.teamNumber = i;      
      };
    };
    $scope.Data.showContent = true;
  });
});