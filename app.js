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