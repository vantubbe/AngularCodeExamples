angular.module('myApp')
    .controller('routeCtrl', function($scope, $location) {

        //this bit lets you inspect various parts of the url (there are more)

        //both of these are getter/setters
        //$location.search gives an object with all the url params
        //$location.hash gives the hash (pound sign) params

        //$location.replace() - this will replace the current history item with the next page.  It's a way to switch to
        //another view without adding any history

        $scope.createEvent = function() {
            $location.url('/newEvent'); //sends us to this view like a link does
        }

    });
