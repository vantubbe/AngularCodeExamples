'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'ngResource',
    'myApp.view1',
    'myApp.view2',
    'myApp.version',
    'ngCookies'
]).
    config(['$routeProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.otherwise({redirectTo: '/view1'});

        $routeProvider.when('/event/:eventId',
            {
                template: 'can send a string here, this way, you could use a template that is generated on the fly',
                templateurl: '/event',
                controller: 'someController',

                //this will tell the page not to resolve until this function comes back with a value;  you can then use
                //$route.current.locals.event in the controller to get the data that is fetched here.
                //this is typically useful when you have to fetch data that takes a while.
                resolve: {
                    event: function($route, eventData){
                        return eventData.getEvent($route.current.pathParams.eventId).$promise;
                    }
                }
            });

        //use html 5 mode (no hashes in url, need to remove in config'd urls)
        //$locationProvider.html5Mode(true);
    }]);
