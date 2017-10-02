app.controller('championshipsControler', function($scope, $http, DataFactory) {
  $scope.Data = DataFactory;
  if ($scope.Data.countries === undefined) {
    $http.get("https://footballbet.com.ua/api/championships/")
    .then(function(response) {
      $scope.Data.countries = response.data.result;    
    });
  };
});