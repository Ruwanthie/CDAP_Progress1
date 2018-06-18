'use strict'
myApp.controller('accountController',['$scope', '$route', '$http','$localStorage','accountService',function ($scope,$route,$http,$localStorage,accountService) {
    
    function getAccount() {
        accountService.get($localStorage.nic).then(data=>{
            $scope.account = data;

        });
    }
    getAccount();

 $scope.getToken=  function  (balance,token) {
        if(token == 'not set') {
            if (balance > 500) {
                var nic = $localStorage.nic;
                var nicInteger = nic.split(/[a-zA-Z]+/g,1);
                var randomNumber = Math.floor((Math.random()*100000)+1);
                $scope.account.token =nicInteger+randomNumber;

                accountService.putToken(nic,$scope.account).then(data=>{
                    if(data.success){
                        alert(" token ready");
                    }
                    else{
                        alert("error");
                    }
                })

            }
            else {
                alert("not enough credits");
            }
        }
        else{
            alert("you already have token");
        }
    }
}])