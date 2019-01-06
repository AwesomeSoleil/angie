(function () {
    'use strict';
    const dependencies = [
        'ngRoute',
        'ngResource',
        'homeView',
        'forecastView',
        'dayView'
    ];
    angular.module('app', dependencies);
})();