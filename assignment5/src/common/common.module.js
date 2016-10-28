(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://pangyan-angularjs-2016-fall.herokuapp.com/')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
