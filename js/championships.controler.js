app.controller('championshipsControler', function($scope, DataFactory) {
  $scope.Data = DataFactory;
  $scope.Data.getApi("championships");
});