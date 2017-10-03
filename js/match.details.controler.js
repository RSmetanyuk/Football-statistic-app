app.controller('matchDetailsControler', function($scope, $routeParams, DataFactory) {
  $scope.Data = DataFactory;
  $scope.idMatch = $routeParams.id_match;
  for (var i = 0; i < $scope.Data.matches.length; i++) {
    for (var j = 0; j < $scope.Data.countries.length; j++) {
      if ($scope.Data.matches[i].title.indexOf($scope.Data.countries[j].name) >= 0) {
        $scope.Data.matches[i].id_championship = $scope.Data.countries[j].id_championship;
      };
    };
  };  
});