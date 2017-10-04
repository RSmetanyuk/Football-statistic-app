app.controller('matchDetailsControler', function($scope, $routeParams, DataFactory) {
  $scope.Data = DataFactory;
  $scope.idMatch = $routeParams.id_match;
  $scope.Data.getApi("championships");
  $scope.Data.getApi("matches");
  $scope.Data.getApi("matches");
  for (var i = 0; i < $scope.Data.matches.length; i++) {
    for (var j = 0; j < $scope.Data.championships.length; j++) {
      if ($scope.Data.matches[i].title.indexOf($scope.Data.championships[j].name) >= 0) {
        $scope.Data.matches[i].id_championship = $scope.Data.championships[j].id_championship;
      };
    };
  };  
});

