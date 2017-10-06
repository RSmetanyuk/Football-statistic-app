app.controller('matchesControler', function($scope, DataFactory) {
  $scope.Data = DataFactory;
  $scope.Data.getApi("matches");
  $scope.searchActive = false;
});