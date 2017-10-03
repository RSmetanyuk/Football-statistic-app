app.controller('championshipsControler', function($scope, $http, DataFactory) {
  $scope.Data = DataFactory;
  if ($scope.Data.countries === undefined) $scope.Data.getApi("championships");
});