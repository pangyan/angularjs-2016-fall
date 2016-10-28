(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['InfoService', 'MenuService'];
function SignUpController(InfoService, MenuService) {
  var $ctrl = this;

  $ctrl.userInfo = {};
  $ctrl.userInfo.firstName = "";
  $ctrl.userInfo.lastName = "";
  $ctrl.userInfo.email = "";
  $ctrl.userInfo.phone = "";
  $ctrl.userInfo.menuNumber = "";
  $ctrl.userInfo.shortName = "";
  $ctrl.userInfo.name = "";
  $ctrl.userInfo.description = "";
  $ctrl.userInfo.categoryShortName = "";

  $ctrl.signUpMessage = "";

  $ctrl.menuNumberMessage = "Pending check...";
  $ctrl.itemFound = undefined;

  console.log("SignUpController()" + $ctrl.userInfo);
  
  $ctrl.signUp = function() {
    console.log("SignUpController.signUp() called...");
    console.log("SignUpController.signUp()" + $ctrl.userInfo.firstName);
    $ctrl.signUpMessage = "";
    InfoService.signUp($ctrl.userInfo);
    $ctrl.signUpMessage = "Your information has been saved.";
  }

  $ctrl.validateMenuNumber = function(shortName) {
    console.log("SignUpController.validateMenuNumber() called...");
    console.log("SignUpController.validateMenuNumber() short name: " + shortName);

    MenuService.getMenuItem(shortName).then(function (response) {
      console.log("SignUpController.validateMenuNumber() response: " + response);
      console.log(response);

      if (response.shortName == null) {
        console.log("SignUpController.validateMenuNumber(): No such menu number exists...");
        $ctrl.menuNumberMessage = "No such menu number exists.";
        $ctrl.itemFound = false;
      } else {
        $ctrl.menuNumberMessage = "";
        $ctrl.itemFound = true;
        $ctrl.userInfo.shortName = response.shortName;
        $ctrl.userInfo.name = response.name;
        $ctrl.userInfo.description = response.description;
        $ctrl.userInfo.categoryShortName = response.categoryShortName;
      }
    });
  }
}


})();
