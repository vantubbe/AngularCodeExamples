angular.module('myApp')
    .controller('usingParseCtrl', function($scope, $parse){

        //this returns a function
        var getter = $parse('event.name');

        var context1 = {event: {name: 'angular stuff'}};
        var context2 = {event: {name: 'other angular stuff'}};

        $scope.name1 = getter(context1);
        $scope.name2 = getter(context2);

        //using a setter
        var setter = getter.assign;
        setter(context1,'new angular stuff');

    });
