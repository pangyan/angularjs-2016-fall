(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['$scope', '$filter', 'ShoppingListCheckOffService'];
function ToBuyController($scope, $filter, ShoppingListCheckOffService) {
	var buyController = this;

	buyController.itemsToBuy = ShoppingListCheckOffService.getItemsToBuy()

	buyController.buyItem = function(index) {
		console.log("ToBuyController.buyItem");
		ShoppingListCheckOffService.buyItem(index);
	}
}

AlreadyBoughtController.$inject = ['$scope', '$filter', 'ShoppingListCheckOffService'];
function AlreadyBoughtController($scope, $filter, ShoppingListCheckOffService) {
	var alreadyBoughtController = this;

	alreadyBoughtController.itemsAlreadyBought = ShoppingListCheckOffService.getItemsAlreadyBought();
}

// ShoppingListCheckOffService.$inject = ['$scope', '$filter'];
// function ShoppingListCheckOffService($scope, $filter) {
function ShoppingListCheckOffService() {
	var service = this;

	var itemsToBuy = [{name: "Eggs", quantity: 10}, {name: "Oat", quantity: 5}, {name: "Cereal", quantity: 1}, {name: "Milk", quantity: 20}, {name: "Blueberries", quantity: 2}];
	var itemsAlreadyBought = [];

	service.buyItem = function(index) {
		console.log("ShoppingListCheckOffService.buyItem");
		console.log(index);
		console.log(itemsToBuy[index]);

		itemsAlreadyBought.push(itemsToBuy[index]);
		itemsToBuy.splice(index, 1);
	}

	service.getItemsToBuy = function() {
		return itemsToBuy;
	}

	service.getItemsAlreadyBought = function() {
		return itemsAlreadyBought;
	}
}

})();