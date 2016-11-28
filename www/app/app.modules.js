angular.module('test',
	[
		'test.run',
		'test.config',
		'test.routes',

		'test.signUp.controller',
		'test.alertError.controller',
		'test.charts.controller',

		'test.rest.service',
		'test.alert.service',
		'test.share.service',
		'test.mock.service',
		'test.charts.service',

		'test.compareTo.directive',
		
		'ui.router',
		'chart.js'
	]);
