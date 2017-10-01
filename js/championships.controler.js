app.controller('championshipscontroler', function($scope, $http, $routeParams) {
  $http.get("https://footballbet.com.ua/api/championships/")
  .then(function(response) {
      $scope.countries = response.data.result;
      $scope.idChampionship = $routeParams.id_championship;
  });
});