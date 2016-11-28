(function(){
	'use strict'

	angular.module('test.config', ['chart.js'])
	.config(charts);

	function charts(ChartJsProvider) {
		var Provider = ChartJsProvider.$get();
		//Provider.Chart.defaults.global.colors = [ '#FF0000', '#00FF00', '#0000FF', '#00FFFF', '#FFFF00' ];
		Provider.Chart.defaults.global.defaultFontColor = '#FFF';
		Provider.Chart.defaults.global.defaultFontSize = 16;
	}

}());
