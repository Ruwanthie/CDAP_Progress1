'use strict'
myApp.factory('accountService',['$http',function ($http) {
    return{
        add:account =>$http.post('/account',account).then(response=>response.data),
        get:nic =>$http.get('/account/'+nic).then(response=>response.data),
        putToken:(nic, account)=>$http.put('/account/token/'+nic,account).then(response=>response.data)
    }
}]);