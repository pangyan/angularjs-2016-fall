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
    var item = undefined;

    var deferred = $q.defer();

    $http({
      method: "GET",
      url: (url)
    })
    .then(function (result) {
      console.log("Response received in MenuDataService.callWebService()...");
      item = {};

      console.log(result.data.short_name);
      console.log(result.data.name);
      console.log(result.data.description);
      console.log(result.data.category_short_name);

      item.shortName = result.data.short_name;
      item.name = result.data.name;
      item.description = result.data.description;
      item.categoryShortName = result.data.category_short_name;

      deferred.resolve(item);
    })
    .catch(function (error) {
      console.log("Something went wrong in MenuDataService.callWebService()...");
      item = {};
      deferred.resolve(item);
    });

    item = deferred.promise;

    return $q.when(item);
  }
}



})();
