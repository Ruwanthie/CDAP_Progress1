'use strict'
var myApp = angular.module('myApp',["ngRoute","ngStorage"]);

myApp.config(function ($routeProvider) {
    $routeProvider.when("/",{

        templateUrl :"./views/login.html"
    }).
    when("/account",{
        resolve: {

            'check':function ($location,$localStorage){

                    if(!$localStorage.loggedIn){
                        $location.path('/');
                    }


            }
        },
        templateUrl :"./views/account.html"
    }).
    when("/sourcecodes",{
        resolve: {

            'check':function ($location,$localStorage){
                if(!$localStorage.loggedIn){

                        $location.path('/');


                }
            }
        },
        templateUrl :"./views/sourcecode.html"
    }).
    when("/buspatents/:id",{
        templateUrl :"./views/busRoute.html"
    }).
    when("/fare",{
        resolve: {

            'check':function ($location,$localStorage){
                if(!$localStorage.AdminloggedIn){

                        $location.path('/');


                }
            }
        },
        templateUrl :"./views/fareCalculation.html"
    }).
    when("/user",{
        templateUrl :"./views/user.html"
    })
    .
    when("/qualitys/:id",{
        templateUrl :"./views/codeanalysis.html"
    }).
    when("/qualitys/:id/loc/class",{
        templateUrl :"./views/loc_class.html"
    }).
    when("/qualitys/:id/inheritance/class",{
        templateUrl :"./views/inheritance_class.html"
    }).
    when("/qualitys/:id/composite/class",{
        templateUrl :"./views/composite_class.html"
    }).
    when("/qualitys/:id/coupling/class",{
        templateUrl :"./views/coupling_class.html"
    }).
    when("/userfeedback",{
        templateUrl :"./views/userfeedback.html"
    }).
    when("/behaviour",{
        templateUrl :"./views/behaviour.html"
    }).
    when("/performance",{
        templateUrl :"./views/performance.html"
    }).
    when("/developer",{
        templateUrl :"./views/developer.html"
    }).
    when("/recommend",{
        templateUrl :"./views/recommend.html"
    }).
    when("/recommend/suitable",{
        templateUrl :"./views/suitable.html"
    }).
    when("/dashboard",{
        templateUrl :"./views/dashboard.html"
    });


});

myApp.controller('loginCtrl', function($scope, $location,$rootScope,$localStorage,userService) {
    $scope.submit = function() {

        $localStorage.nic = $scope.username;
        console.log($scope.username);
        console.log($scope.password);
        if($scope.username == 'admin' || $scope.username == 'Admin') {
            if($scope.username == 'admin' && $scope.password == 'admin'){
                $localStorage.AdminloggedIn = true;
                $localStorage.loggedIn = true;
                $location.path('/dashboard');

            }
            else {
                alert('Username or Password Incorrect');
            }
        }
        else {

            userService.get($localStorage.nic, $scope.password).then(data => {
                if (data.nic != null) {
                    $localStorage.loggedIn = true;
                    $location.path('/account');
                }
                else {
                    alert('Username or Password Incorrect');
                }
            })
        }

    }

});
myApp.controller('logoutCtrl',function ($scope, $location,$localStorage) {

    $scope.logout = function () {
        $location.path('/');
        $localStorage.loggedIn = false;
        $localStorage.AdminloggedIn= false;

    }
})