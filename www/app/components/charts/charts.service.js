(function() {

    angular.module('test.charts.service', [])
    .factory('ChartsService', chartsService);

    chartsService.$inject = ['DTOptionsBuilder', 'DTColumnBuilder'];
    function chartsService(DTOptionsBuilder, DTColumnBuilder) {
        return {
            createBrowserAccessChart: createBrowserAccessChart,
            createCityTemperaturesChart : createCityTemperaturesChart,
            createBrowserAccessTable: createBrowserAccessTable,
            createCityTemperaturesTable : createCityTemperaturesTable
        }

        function createBrowserAccessChart(obj) {

            var clone = angular.copy(obj);
            var sum = obj.reduce(function(prev, cur) { return prev + cur[1]; }, 0);
            
            for(var i = 0; i < obj.length; i++) {                
                clone[i][1] = ((clone[i][1] / sum) * 100).toFixed(2);
            }

            var labels = clone.map(function(obj) { return obj[0]; });
            var series = ['browser', 'distribuição (%)'];
            var data = clone.map(function(obj) { return obj[1]; });

            return {
                    labels: labels,
                    series: series,
                    data: data
                };
        }

        function createCityTemperaturesChart(obj) {

            var clone = angular.copy(obj);
            
            var labels = ['janeiro', 'fevereiro', 'marco', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
            var series = clone.map(function(obj) { return obj.name; });
            var data = [];
                clone.forEach(function(date, index){
                    data[index] = [];
                    var count = 0;
                    for(var year = 1; year <= 12; year++) {
                        var average = date.data.reduce(function(prev, day) {
                        if(parseInt(day[0].substring(3)) == year) {
                            count++;
                            return prev + day[1];
                        }
                        return prev;
                        }, 0);
                        data[index][year - 1] = (average / count).toFixed(1);
                        count = 0;
                    }
                });

                return {
                    labels: labels,
                    series: series,
                    data: data
                };
            };

        function createBrowserAccessTable(obj) {
            var array = [];
            
            for(var i = 0; i < obj.data.length; i++) {
                array.push({label: obj.labels[i], value: obj.data[i]});
            }

            var columns = obj.series.map(function(property, index) {
            var column = Object.keys(array[0])[index];
                return DTColumnBuilder.newColumn(column).withTitle(property);
            });

            return {
                options: array,
                columns: columns
            }
        }

        function createCityTemperaturesTable(obj) {
            var array = [];
            var dtLabels = ['cidade', 'janeiro', 'fevereiro', 'marco', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
            
            for(var i = 0; i < obj.data.length; i++) {
                array.push({label: obj.series[i], value: obj.data[i]});
            }

            var options = [];
            array.forEach(function(property, index) {
                var option = property.value.reduce(function(prev, cur, index) {
                    var key = obj.labels[index];
                    prev[key] = cur;

                    return prev;
                }, {});
                option.cidade = obj.series[index];
                options.push(option);
            })

            var columns = dtLabels.map(function(property, index) {
                var key = dtLabels[index];
                
                return DTColumnBuilder.newColumn(key).withTitle(key);
            });

            return {
                options: options,
                columns: columns
            }
        }
    }

}());

