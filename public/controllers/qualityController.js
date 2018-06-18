
'use strict';

myApp.controller('qualityController', ['$scope', '$routeParams','$http', 'sourcecodeService',
    function ($scope, $routeParams,$http, sourcecodeService) {

         function getSourcecode() {
           
            sourcecodeService.getById($routeParams.id).then(sourcecode => {
                $scope.sourcecode = sourcecode;
            });
        }

        getSourcecode();

        $scope.addQuality = (id, quality) => {
            sourcecodeService.addQuality(id, quality).then((sourcecode) => {
                $scope.sourcecode = sourcecode;
                quality.category = '';
                quality.standard = '';
            });
            
        };
    }]);