'use strict';

myApp.factory('userfeedbackService', ['$http',
    function ($http) {
        
         return {
            get: () => $http.get('/userfeedback').then(response => response.data),
            add: userfeedback => $http.post('/userfeedback', sourcecode).then(response => response.data),
            getById: id => $http.get('/userfeedback/' + id).then(response => response.data)
        };
    }]);