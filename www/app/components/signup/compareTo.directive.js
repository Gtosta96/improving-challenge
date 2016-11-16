(function(){
    'use strict'

    angular.module('test.compareTo.directive', [])
    .directive("compareTo", compareTo);

    function compareTo() {
        return {
            require: "ngModel",
            scope: {
            otherModelValue: "=compareTo"
            },
            link: link
        }
    
        function link(scope, element, attributes, ngModel) {
            ngModel.$validators.compareTo = comparator, scope.$watch("otherModelValue", handler);

            function comparator(modelValue) {
                if ((modelValue && modelValue.length > 0) && (scope.otherModelValue && scope.otherModelValue.length > 0)) {
                    return modelValue == scope.otherModelValue;
                }
                // } else if ((modelValue && !(modelValue == "")) && (scope.otherModelValue && !(scope.otherModelValue == ""))) {
                //     return false;
                // }
            }

             function handler() {
                ngModel.$validate();
             }
        }
    }

}());