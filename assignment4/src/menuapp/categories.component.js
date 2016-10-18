(function () {
'use strict';

angular.module('MenuApp')
.component('categoryList', {
  templateUrl: 'src/menuapp/templates/category-info.template.html',
  bindings: {
    categoryItems: '<'
  }
});

})();
