(function(){
    'use strict'

    angular.module('test.alertError.controller', [])
    .controller('AlertErrorController', alertErrorController);

    alertErrorController.$inject = ['$element', 'ShareService']
    function alertErrorController($element, ShareService) {

        var vm = this;			
        vm.message = ShareService.get('httpErrorMessage');
        vm.close = close;

        function close(result) {
            $element.remove();
        }
    }

}());