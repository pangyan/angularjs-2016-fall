(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http', '$q']
function MenuDataService($http, $q) {
  var service = this;

  // List of shopping items
//  var items = [];

  // MDEMDE Pre-populate the categories list (for testing purpose)
//  categories.push({"short_name": "A", "description": "DNLM 1st"});
//  categories.push({"short_name": "B", "description": "DNLM 2nd"});
  
  // MDEMDE Pre-populate a no cookie list (for testing purpose)
//  items.push({
//    category: "A",
//    name: "Sugar",
//    quantity: "2 bags",
//    description: "Sugar used for baking delicious umm... baked goods."
//  });
//  items.push({
//    category: "B",
//   name: "flour",
//    quantity: "1 bags",
//    description: "High quality wheat flour. Mix it with water, sugar, 2 raw eggs."
//  });
//  items.push({
//    category: "A",
//    name: "Chocolate Chips",
//    quantity: "3 bags",
//    description: "Put these in the dough. No reason, really. Gotta store them somewhere!"
//  });

  service.getAllCategories = function() {
    console.log("Calling MenuDataService.getAllCategories()...");
    // TODO
    //
    return service.callWebService("https://davids-restaurant.herokuapp.com/categories.json");
  };

  service.getItemsForCategory = function(categoryShortName) {
    console.log("Calling MenuDataService.getItemsForCategory(categoryShortName)..., categoryShortName = " + categoryShortName + "...");
    // TODO
    //
    return service.callWebService("https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName);
  };

  service.callWebService = function(url) {
    console.log("Calling MenuDataService.callWebService()...");
    var data = undefined;

    var deferred = $q.defer();

    $http({
      method: "GET",
      url: (url)
    })
    .then(function (result) {
      console.log("Response received in MenuDataService.getAllCategories()...");
      data = [];
      data = result.data;
      deferred.resolve(data);
    })
    .catch(function (error) {
      console.log("Something went wrong in MenuDataService.getAllCategories()...");
      deferred.reject(error);
    });

    data = deferred.promise;

    return $q.when(data);
  }
}

})();
