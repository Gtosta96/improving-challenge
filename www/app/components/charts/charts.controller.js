(function(){
    'use strict'

    angular.module('test.charts.controller', ['chart.js'])
    .controller('ChartsController', chartsController);

    chartsController.$inject = ['$stateParams', '$q', 'DTOptionsBuilder', 'DTColumnBuilder', 'RestService', 'ChartsService'];
    function chartsController($stateParams, $q, DTOptionsBuilder, DTColumnBuilder, RestService, ChartsService) {

        var vm = this;
        vm.tableMode = false;
        vm.toggleTableMode = toggleTableMode;
        $stateParams = {"token": "beabdb65"};

        loadData();

        function loadData() {
            $q.all([
                RestService.browserAccess.charge($stateParams).$promise,
                RestService.cityTemperatures.charge($stateParams).$promise
            ])
            .then(createData)
            .catch(onFail);

            function createData(data) {
                var browserAccessChart = ChartsService.createBrowserAccessChart(data[0]);
                var cityTemperaturesChart = ChartsService.createCityTemperaturesChart(data[1]);

                var browserAccessTable = ChartsService.createBrowserAccessTable(browserAccessChart);
                var cityTemperaturesTable = ChartsService.createCityTemperaturesTable(cityTemperaturesChart);

                vm.browserAccess = { chart: browserAccessChart, table: browserAccessTable };
                vm.cityTemperatures = { chart: cityTemperaturesChart, table: cityTemperaturesTable };
            }
            
            function onFail() {
              console.log(arguments);
            }    
        }

        function toggleTableMode() {
            vm.modeMessage = vm.tableMode ? 'Visualizar em modo Tabela' : 'Visualizar em Modo Gráfico';
            vm.tableMode = !vm.tableMode;
        }           
    }

}());