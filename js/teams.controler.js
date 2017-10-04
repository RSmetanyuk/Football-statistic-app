app.controller('teamsControler', function($scope, DataFactory) {
  $scope.Data = DataFactory;
  $scope.Data.getApi("teams");
});