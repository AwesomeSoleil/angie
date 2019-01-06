(function () {
    'use strict';
    angular.module('dayView')
    .component('dayView', {
        bindings: {
            weatherData: '<'
        },
        templateUrl: 'app/day-view/day-view.template.html',
    });
})();