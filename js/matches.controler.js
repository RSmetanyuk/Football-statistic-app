app.controller('matchesControler', function($scope, DataFactory) {
  $scope.Data = DataFactory;
  if ($scope.Data.matches === undefined) $scope.Data.getApi("matches");
});