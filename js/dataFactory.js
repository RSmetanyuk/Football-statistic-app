app.factory('DataFactory', function($http){
  var Data = {};
  Data.getApi = function(database) {
    if (Data[database] === undefined) {
      $http.get("https://footballbet.com.ua/api/".concat(database, "/"))
      .then(function(response) {
        Data[database] = response.data.result;    
      });
    };
  };
  return Data;
});