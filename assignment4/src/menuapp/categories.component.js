(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/menuapp/templates/category-info.template.html',
  bindings: {
    categoryList: '<'
  }
});

})();
