app.controller('championshipDetailsControler', function($scope, $routeParams, DataFactory) {
  $scope.Data = DataFactory;
  $scope.idChampionship = $routeParams.id_championship;
});