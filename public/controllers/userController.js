'use strict'

myApp.controller('userController',['$scope', '$route', '$http','$location','userService','accountService',function ($scope,$route,$http,$location,userService,accountService) {

    $scope.account ={};
    $scope.addUser = function (user) {

        userService.add(user).then((data)=>{
            if(data.success){
                var date = new Date();
                var year = date.getFullYear();
                var nic = user.nic;
                var nicInteger = nic.split(/[a-zA-Z]+/g,1);
                $scope.account.account_id = nicInteger+year;
                $scope.account.name = user.name;
                $scope.account.nic = user.nic;
                $scope.account.registered_date= date;
                $scope.account.balance = 0.00;
                $scope.account.token = 'not set';

                accountService.add($scope.account).then((data)=>{
                    if(data.success){
                        alert("You are Successfully Registered to System ");
                        $scope.user = {};
                        $location.path('/');
                    }
                    else{
                         alert("Error");
                    }
                });


            }else{
                alert("Error");
            }
        })
    }
}]);