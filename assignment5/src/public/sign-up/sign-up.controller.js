(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['InfoService'];
function SignUpController(InfoService) {
  var $ctrl = this;

  $ctrl.userInfo = {};
  $ctrl.userInfo.firstName = "";
  $ctrl.userInfo.lastName = "";
  $ctrl.userInfo.email = "";
  $ctrl.userInfo.phone = "";
  $ctrl.userInfo.menuNumber = "";

  console.log("SignUpController()" + $ctrl.userInfo);
  
  $ctrl.signUp = function() {
    console.log("SignUpController.signUp() called...");
    console.log("SignUpController.signUp()" + $ctrl.userInfo.firstName);
    InfoService.signUp($ctrl.userInfo);
  }

  $ctrl.validateMenuNumber = function() {
    // TODO
  }
}


})();
