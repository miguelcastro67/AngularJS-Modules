window.sharedLib = {};

(function (lib) {
    'use strict';
    
    var setComponentBorders = function (componentBorders, angularModule) {
        if (componentBorders) {
            if (angularModule._invokeQueue) {
                angularModule._invokeQueue.forEach(function (item) {
                    if (item[1] == 'component') {
                        var componentName = item[2][0];
                        var componentProperties = item[2][1];
                        if (componentProperties.templateUrl) {
                            var templateUrl = componentProperties.templateUrl;
                            delete componentProperties.templateUrl;
                            componentProperties.template = '<div class="component-borders"><b>' + componentName + '</b><div ng-include="\'' + templateUrl + '\'"></div></div>';
                        }
                        else {
                            var template = '<div class="component-borders">' + componentName + '<div>' + componentProperties.template + '</div></div>';
                            componentProperties.template = template;
                        }
                    }
                });
            }
        }

        return this;
    };

    var loadExternalFile = function (fileName, fileType) {
        if (fileType.toLowerCase() == 'js') {
            var tag = document.createElement('script')
            tag.setAttribute('type', 'text/javascript');
            tag.setAttribute('src', fileName);
            document.getElementsByTagName('body')[0].appendChild(tag);
        }
        else if (fileType.toLowerCase() == 'css') {
            var tag = document.createElement('link');
            tag.setAttribute('rel', 'stylesheet');
            tag.setAttribute('type', 'text/css');
            tag.setAttribute('href', fileName);
            document.getElementsByTagName('head')[0].appendChild(tag);
        }

        return this;
    }

    lib.setComponentBorders = setComponentBorders;
    lib.loadExternalFile = loadExternalFile;

})(window.sharedLib);