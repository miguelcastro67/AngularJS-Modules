(function () {
    'use strict';
    
    var modModule = angular.module('module2', ['ui.router']);

    modModule.value('componentBorders', true);

    modModule.run(function (componentBorders) {
        sharedLib.setComponentBorders(componentBorders, modModule);
    });

    modModule.config(function ($stateProvider, $urlRouterProvider) {
        var states = [
            {
                name: 'mod2Home',
                url: '/module2',
                template: '<module2-home></module2-home>'
            }
        ];

        states.forEach(function (state) {       
            $stateProvider.state(state);
        });
    });

    angular.registerModule(modModule);
})();