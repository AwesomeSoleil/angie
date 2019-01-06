(function () {
    'use strict';
    angular.module('app')
    .config(['$routeProvider', '$locationProvider',
        function ($routeProvider, $locationProvider) {
            $locationProvider.hashPrefix('');
            $routeProvider.
            when('/', {
                template: '<home-view></home-view>'
            })
            .when('/forecast', {
                template: '<forecast-view></forecast-view>'
            })
            .when('/forecast/:days', {
                template: '<forecast-view></forecast-view>'
            });
        }
    ])
    .service('cityNameService', [cityNameService])
    .factory('weatherFactory', ['$resource', weatherFactory]);
    function cityNameService() {
        this.cityName = null;
    }
    function weatherFactory($resource) {
        function getWeather(cityName, days) {
            const API_KEY = 'bf03de8120fbabf27fdd083f9d1fddc0';
            const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast/daily';
            if (cityName) {
                const resource = $resource(ROOT_URL);
                const parameters = {
                    appid: API_KEY,
                    q: cityName,
                    cnt: days,
                    units: 'metric'
                };
                return resource.get(parameters);
            }
            return null;
        }
        return { getWeather };
    }
})();