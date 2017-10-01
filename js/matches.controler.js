app.controller('matchescontroler', function($scope, $http, $routeParams) {
  $http.get("https://footballbet.com.ua/api/matches/")
  .then(function(response) {
      $scope.matches = response.data.result;
      $scope.idMatch = $routeParams.id_match;
  });
});