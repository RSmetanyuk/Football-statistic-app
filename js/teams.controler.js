app.controller('teamsControler', ['$scope', 'DataFactory', function($scope, DataFactory) {
  $scope.Data = DataFactory;
  $scope.Data.getApi("teams");
}]);