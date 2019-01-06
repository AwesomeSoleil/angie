(function () {
    'use strict';
    angular.module('forecastView')
    .component('forecastView', {
        templateUrl: 'app/forecast-view/forecast-view.template.html',
        controller: forecastViewController
    });
    forecastViewController.$inject = ['$routeParams', 'cityNameService', 'weatherFactory'];
    function forecastViewController($routeParams, cityNameService, weatherFactory) {
        this.$onInit = function () {
            this.cityName = cityNameService.cityName;
            const days = $routeParams.days || 2;
            this.weatherData = weatherFactory.getWeather(this.cityName, days);
            // enjoy the nice console table
            this.weatherData.$promise
            .then(function (responce) {
                console.table(responce.list);
            })
            .catch(function (error) {
                console.log(error);
            });
        };
    }
})();