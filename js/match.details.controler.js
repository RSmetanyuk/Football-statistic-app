app.controller('matchDetailsControler', function($scope, $routeParams, DataFactory) {
  $scope.Data = DataFactory;
  $scope.idMatch = $routeParams.id_match;
});