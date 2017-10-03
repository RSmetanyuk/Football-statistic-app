app.controller('teamsControler', function($scope, $http, DataFactory) {
  $scope.Data = DataFactory;
  if ($scope.Data.teams === undefined) {
    $http.get("https://footballbet.com.ua/api/teams/")
      .then(function(response) {
        $scope.Data.teams = response.data.result;      
      });
  };
});