(function () {
    'use strict';
    angular.module('homeView')
    .component('homeView', {
        templateUrl: 'app/home-view/home-view.template.html',
        controller: homeViewController
    });
    homeViewController.$inject = ['cityNameService'];
    function homeViewController(cityNameService) {
        this.$onInit = function () {
            this.inputChangeHandler = function () {
                cityNameService.cityName = this.cityName;
            };
        };
    }
})();