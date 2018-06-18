myApp.factory('userService',['$http',function ($http) {
    return{
        add:(user)=>$http.post('/user',user).then(response => response.data),
        get:(nic,password) =>$http.get('/user/'+nic+'/'+password).then(response => response.data)
    }
}]);