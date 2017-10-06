app.controller('teamsControler', function($scope, DataFactory) {
  $scope.Data = DataFactory;
  $scope.Data.getApi("teams");
  $scope.filterValidNames = function(team) {return (team.name.length > 0 ? true : false)}
  $scope.searchActive = false;
});

