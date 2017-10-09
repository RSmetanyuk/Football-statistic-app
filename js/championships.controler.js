app.controller('championshipsControler', function($scope, DataFactory) {
  $scope.Data = DataFactory;
  $scope.Data.getApi("championships", function() {});
  $scope.searchActive = false;
});