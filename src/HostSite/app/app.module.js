(function () {
    'use strict';
    
    angular.applicationModule = 'app';
    angular.registerModule = function (module) {
        angular.module(angular.applicationModule).requires.push(module.name);
    };

    var appModule = angular.module(angular.applicationModule, [ 'ui.router' ]);

    appModule.value('componentBorders', true);

    appModule.run(function (componentBorders) {
        sharedLib.setComponentBorders(componentBorders, appModule);
    });

    appModule.config(function ($stateProvider, $urlRouterProvider) {
        var states = [
            {
                name: 'home',
                url: '',
                template: '<home></home>'
            },
            {
                name: 'home2',
                url: '/',
                template: '<home></home>'
            },
        ];

        $urlRouterProvider.otherwise('/');

        states.forEach(function (state) {       
            $stateProvider.state(state);
        });
    });
})();