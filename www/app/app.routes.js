(function(){
	'use strict'

	angular.module('test.routes', ['ui.router'])
	.config(config);

	function config($stateProvider, $urlRouterProvider) {
		
		$urlRouterProvider.otherwise('/home');
		
		$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'app/components/signup/signup.html', //components/signup/signup.view.html
			controller: 'SignUpController',
			controllerAs: 'vm'
		})

		.state('charts', {
			url: '/charts',
			templateUrl: 'app/components/charts/charts.view.html',
			controller: 'ChartsController',
			controllerAs: 'vm'
		});
	};

}());
