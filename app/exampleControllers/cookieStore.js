angular.module('myApp')
    .controller('cookieStoreCtrl', function($scope, $cookieStore) {

        $cookieStore.put('name','value');
        console.log($cookieStore.get('name'));
        $cookieStore.remove('name');

        //$cookieStore cannot set expiration dates
    });
