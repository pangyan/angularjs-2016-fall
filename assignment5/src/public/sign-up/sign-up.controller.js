(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = [];
function SignUpController() {
  var $ctrl = this;

  $ctrl.userInfo = {};
  $ctrl.userInfo.firstName = "FFFFFirst";
  $ctrl.userInfo.lastName = "LLLLLast";
  $ctrl.userInfo.email = "EEE@EEEmail.com";
  $ctrl.userInfo.phone = "4670";
  $ctrl.userInfo.menuNumber = "9394";

  console.log("DNLM!!!!!");
  console.log($ctrl.userInfo);
  
  $ctrl.signUp = function() {
    console.log("SignUpController.signUp(...) called");
    // TODO
  }
}


})();
