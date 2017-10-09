app.controller('teamsControler', function($scope, DataFactory) {
  $scope.Data = DataFactory;
  $scope.Data.showContent = false;
  $scope.Data.getApi("teams", function() {
    $scope.Data.showContent = true;
  });
  $scope.filterValidNames = function(team) {return (team.name.length > 0 ? true : false)}
  $scope.searchActive = false;
});

