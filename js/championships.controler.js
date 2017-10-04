app.controller('championshipsControler', function($scope, DataFactory) {
  $scope.Data = DataFactory;
  if ($scope.Data.championships === undefined) $scope.Data.getApi("championships");
});