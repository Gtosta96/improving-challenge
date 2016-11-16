(function() {
	'use strict'

	angular.module('test.rest.service', ['ngResource'])
	.factory('RestService', restService);

	restService.$inject = ['$resource'];
	function restService($resource) {
		return {
			submitContact: submitContact(),
			browserAccess: browserAccess(),
			cityTemperatures: cityTemperatures()
		};

		function submitContact(data) {
			return $resource('http://www.improving.com.br/api/test/users', { data: '@data' });	
		};

		function browserAccess() {
			return $resource('http://www.improving.com.br/api/test/hits-by-browser', { data: '@data' }, {charge: { method: 'POST', isArray: true } });
		}

		function cityTemperatures() {
			return $resource('http://www.improving.com.br/api/test/city-temperatures', { data: '@data' }, {charge: { method: 'POST', isArray: true } });
		}
	};

})();