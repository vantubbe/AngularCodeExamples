angular.module('myApp')
    .controller('usingServicesCtrl', function($scope, promiseExamples ,$location){

            var onUserComplete = function() {
                //some complete stuff
            };

            var onError = function() {
                //some on error stuff
            };

            promiseExamples.getPromiseWithThen($scope.username)
               .then(onUserComplete,onError);
    });