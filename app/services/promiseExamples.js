
angular.module('myApp')

    .factory('promiseExamples'), function ($http, $resource, $q) {
    var resource = $resource('/someurlwithparam/:id', {id: '@id'});

    return {
            //Returning a promise by using the $q defer
            getPromiseWithDollarQ: function() {
                var deferred = $q.defer();
                $http({method: 'GET', url: '/someValidURL'})
                    .success(function (data, status, headers, config) {
                        deferred.resolve(data);
                    })
                    .error(function (data, status, headers, config) {
                        deferred.reject(status);
                    });
                return deferred.promise;
            },
            //Return a promise using .then
            //NOTE: you don't need to use .then, $http.get will also return a promise, but with the added .then
            // you can unwrap the data from the response and return that, rather than the raw response.
            getPromiseWithThen: function(username){
                return $http.get("https://api.gitub.com/users/" + username)
                            .then(function (response) {
                                return response.data;
                            });
            },

            //This does NOT return a promise, so you cannot do a .then on it.  It returns whatever the url returns
            //Typically you would assign this to some variable on $scope
            //You can however execute .$promise, which will give a promise that can use a .then
            getPromiseWithResource: function(){
                return $resource('/someurlwithparam/:id', {id: '@id'}).get({id:1});
            },

            saveSomething: function (someData) {
                return resource.save(someData);
            }

            //resource.remove(),delete(),and query()
        }
};

