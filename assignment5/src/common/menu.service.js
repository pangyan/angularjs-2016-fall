(function () {
"use strict";

angular.module('common')
.service('InfoService', InfoService)
.service('MenuService', MenuService);

InfoService.$inject = ['$http', 'ApiPath'];
function InfoService($http, ApiPath) {
  var service = this;

  service.userInfo = undefined;

  service.signUp = function(userInfo) {
    service.userInfo = userInfo;
  }

  service.getUserInfo = function() {
    console.log("InfoService.getUserInfo() called...");
    return service.userInfo;
  }
}

MenuService.$inject = ['$http', 'ApiPath', '$q'];
function MenuService($http, ApiPath, $q) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };

  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getMenuItem = function (shortName) {
    console.log("Calling MenuService.getMenuItem(shortName)..., short name = " + shortName + "...");
    return service.callWebService(ApiPath + '/menu_items/' + shortName + '.json');
  }

  service.callWebService = function(url) {
    console.log("Calling MenuDataService.callWebService()...");
    var found = undefined;

    var deferred = $q.defer();

    $http({
      method: "GET",
      url: (url)
    })
    .then(function (result) {
      console.log("Response received in MenuDataService.callWebService()...");
      found = "Y";
      deferred.resolve(found);
    })
    .catch(function (error) {
      console.log("Something went wrong in MenuDataService.callWebService()...");
      found = "N";
      deferred.resolve(found);
    });

    found = deferred.promise;

    return $q.when(found);
  }
}



})();
