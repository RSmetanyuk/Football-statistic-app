app.controller('matchesControler', function($scope, $http, DataFactory) {
  $scope.Data = DataFactory;
  if ($scope.Data.matches === undefined) {
    $http.get("https://footballbet.com.ua/api/matches/")
    .then(function(response) {
        $scope.Data.matches = response.data.result;
    });
  };
});