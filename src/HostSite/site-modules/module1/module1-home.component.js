(function () {
    'use strict';

    angular.module('module1').component('module1Home', {
        controllerAs: 'vm',
        controller: function () {
            var vm = this;
        },
        //template: '<h2>HELLO</h2>'
        templateUrl: 'site-modules/module1/module1-home.component.html'
    });
})();
