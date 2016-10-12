(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['$scope', '$filter'];
function ToBuyController($scope, $filter) {


}

AlreadyBoughtController.$inject = ['$scope', '$filter'];
function AlreadyBoughtController($scope, $filter) {

}

ShoppingListCheckOffService.$inject = ['$scope', '$filter'];
function ShoppingListCheckOffService($scope, $filter) {

}

})();