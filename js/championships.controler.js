app.controller('championshipsControler', function($scope, DataFactory) {
  $scope.Data = DataFactory;
  $scope.Data.showContent = false;
  $scope.Data.getApi("championships", function() {
    $scope.Data.showContent = true;
  });
  $scope.searchActive = false;
});