# angular-suunto-parser-demo-app

This is the demo application of [angular-suunto-parser](https://github.com/FrequentlyMissedDeadlines/angular-suunto-parser) awesome lib.

``` javascript
'use strict';

//Import parser module
angular.module('demoApp', [
    'fmd.suunto.parser'
])

//Inject DM5Parser
.controller('demoCtrl', ['$scope', 'DM5Parser', function ($scope, DM5Parser) {
    $scope.dive = undefined;

    $scope.selectFile = function() {
        $("#file").click();
    };

    $scope.fileChanged = function(input) {
        //Pass the input files and the scope to get a promise of parsed dives
        DM5Parser.parseFiles(input.files, $scope).then(function (dives) {
            $scope.dive = dives[0];
        });
    };
}]);
```

To run the demo locally:
```
npm install
node server.js
```