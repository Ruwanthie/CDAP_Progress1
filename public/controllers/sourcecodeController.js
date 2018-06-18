'use strict';

myApp.controller('sourcecodeController', ['$scope','$route', '$http','$routeParams','sourcecodeService',
    function ($scope,$route,$http,$routeParams, sourcecodeService) {
        
        
       function getSourcecodes() {
            sourcecodeService.get().then(sourcecodes => {
                $scope.sourcecodes = sourcecodes;
            })
        }

        getSourcecodes();

        $scope.addSourcecode = (sourcecode) => {
            sourcecodeService.add(sourcecode).then(() => {
                getSourcecodes();
                sourcecode = {};
            });
        };
       

       
    }]);