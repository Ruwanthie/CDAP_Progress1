myApp.controller('userfeedbackController', ['$scope', '$route', '$http', 'userfeedbackService', function ($scope, $route, $http, userfeedbackService) {

    function getUserfeedback() {
        userfeedbackService.get().then(function (userfeedback) {
            $scope.userfeedback = userfeedback;
        })
    }

    getUserfeedback();

    
    $scope.addUserfeedback = function (userfeedback) {
        userfeedbackService.add(userfeedback).then(function (data) {
             getUserfeedback();
             userfeedback = {};

        })
    };
}]);