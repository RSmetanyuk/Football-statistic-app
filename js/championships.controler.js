app.controller('championshipscontroler', function($scope, $http, $routeParams) {
  $http.get("https://footballbet.com.ua/api/championships/")
  .then(function(response) {
    $scope.countries = response.data.result; 
    $scope.idChampionship = $routeParams.id_championship;
    if(!isFinite($scope.idChampionship)) {
      for (var i = 0; i < $scope.countries.length; i++) {
        if ($routeParams.id_championship.indexOf($scope.countries[i].name) >= 0) {$scope.idChampionship = $scope.countries[i].id_championship;};
      }    
    };     
  });
});