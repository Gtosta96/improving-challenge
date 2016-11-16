(function(){
    'use strict'

    angular.module('test.signUp.controller', [])
    .controller('SignUpController', signUpController);

    //signUpController.$inject = ['RestService', 'AlertService', 'MockService'];
    function signUpController($state, RestService, AlertService, MockService) {

        var vm = this;
        vm.submit = submit;
        vm.contact = {};
        vm.countries = MockService.countries();

        function submit(form, contact) {
            if (form.$valid) {
                RestService.submitContact.save(contact).$promise
                .then(onDone)
                .catch(onFail);

                function onDone(xhr) {
                    $state.go('charts', { token: xhr.token});
                } 

                function onFail(xhr) {
                    AlertService.httpError(xhr);
                }
            }            
        };    
    };

}());