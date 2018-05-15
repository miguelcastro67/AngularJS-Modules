(function () {
    'use strict';
    
    var modModule = angular.module('module1', ['ui.router']);

    sharedLib.loadExternalFile('site-modules/module1/module1.css', 'css');

    modModule.value('componentBorders', true);

    modModule.run(function (componentBorders) {
        sharedLib.setComponentBorders(componentBorders, modModule);
    });

    modModule.config(function ($stateProvider, $urlRouterProvider) {
        var states = [
            {
                name: 'mod1Home',
                url: '/module1',
                template: '<module1-home></module1-home>'
            }
        ];

        states.forEach(function (state) {       
            $stateProvider.state(state);
        });
    });

    angular.registerModule(modModule);
})();