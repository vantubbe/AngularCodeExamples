angular.module('myApp')
    .controller('usingServicesCtrl', function($scope, $filter, someFilterNameFilter, $rootScope) {

        var someFilter = $filter('someFilterName');
        someFilter(1);
        someFilterNameFilter(1) //does same thing

        //try not to use any of these
        //$rootScope is the scope all scopes inherit from
        //$window
        //$document
        //$rootElement - whatever element has ngApp
    });
