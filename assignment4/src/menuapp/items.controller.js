(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

// 'items' is injected through state's resolve
ItemsController.$inject = ['items', 'category']
function ItemsController(items, category) {
  var itemsController = this;
  itemsController.itemList = items;
  itemsController.category = category;

  console.log("ItemsController: " + itemsController.itemList);
  console.log("ItemsController: " + category);
}

})();
