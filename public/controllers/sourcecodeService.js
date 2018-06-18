'use strict';

myApp.factory('sourcecodeService', ['$http',
    function ($http) {
        
         return {
            get: () => $http.get('/sourcecodes').then(response => response.data),
            add: sourcecode => $http.post('/sourcecodes', sourcecode).then(response => response.data),
            getById: id => $http.get('/sourcecodes/' + id).then(response => response.data),
            addQuality: (id,quality) => $http.post('/sourcecodes/' + id + '/qualitys', quality).then(response => response.data)
        };
    }]);