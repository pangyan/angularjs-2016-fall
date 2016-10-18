(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$q', '$timeout']
function MenuDataService($q, $timeout) {
  var service = this;

  // List of shopping items
  var categories = [];
  var items = [];

  // MDEMDE Pre-populate the categories list (for testing purpose)
  categories.push({"short_name": "A", "description": "DNLM 1st"});
  categories.push({"short_name": "B", "description": "DNLM 2nd"});
  
  // MDEMDE Pre-populate a no cookie list (for testing purpose)
  items.push({
    category: "A",
    name: "Sugar",
    quantity: "2 bags",
    description: "Sugar used for baking delicious umm... baked goods."
  });
  items.push({
    category: "B",
    name: "flour",
    quantity: "1 bags",
    description: "High quality wheat flour. Mix it with water, sugar, 2 raw eggs."
  });
  items.push({
    category: "A",
    name: "Chocolate Chips",
    quantity: "3 bags",
    description: "Put these in the dough. No reason, really. Gotta store them somewhere!"
  });

  // Simulates call to server
  // Returns a promise, NOT items array directly
  service.getItems = function () {
    var deferred = $q.defer();

    // Wait 2 seconds before returning
    $timeout(function () {
      // deferred.reject(items);
      deferred.resolve(items);
    }, 800);

    return deferred.promise;
  };

  service.getAllCategories = function() {
    console.log("Calling MenuDataService.getAllCategories()...");
    // TODO
    //
    
    return categories;
  };

  service.getItemsForCategory = function(categoryShortName) {
    console.log("Calling MenuDataService.getItemsForCategory(categoryShortName)..., categoryShortName = " + categoryShortName + "...");
    // TODO
    //
    return items;
  };
}

})();
