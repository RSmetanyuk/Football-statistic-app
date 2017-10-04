app.controller('teamsControler', function($scope, DataFactory) {
  $scope.Data = DataFactory;
  if ($scope.Data.teams === undefined) $scope.Data.getApi("teams");
});