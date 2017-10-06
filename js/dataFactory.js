app.factory('DataFactory', function($http){
  var Data = {};
  
  
  Data.getApi = function(database) {
    if (Data[database] === undefined) {
      $http.get("https://footballbet.com.ua/api/".concat(database, "/"))
      .then(function(response) {
        Data[database] = response.data.result;  
        if (database === "teams") {
          for (var i = 0; i < Data.teams.length; i++) {
            Data.teams[i].emblemaUrl = (Data.teams[i].emblema === "" ? "/img/no_logo.png" : "https://footballbet.com.ua/teams/embl/".concat(Data.teams[i].emblema));
          }
        };         
      });
    };
    return $http.get("https://footballbet.com.ua/api/".concat(database, "/"));   
  };

  /*
    Data.getApi = function(database) {
    return new Promise(function(resolve, reject) {

      if (Data[database] === undefined) {
        $http.get("https://footballbet.com.ua/api/".concat(database, "/"))
        .then(function(response) {
          Data[database] = response.data.result; 
          resolve(response);  
        });
      } else {
       resolve('Success!');
      };
      //return $http.get("https://footballbet.com.ua/api/".concat(database, "/"));   
    });
  };
  */

  return Data;
});