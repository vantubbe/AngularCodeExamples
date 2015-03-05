angular.module('myApp')
    .controller('routeParamExampleCtrl', function($scope, $routeParams, $route) {

        //using route params
        var routedParam = $routeParams.eventId; //this is defined in the config of the controller/view
        var routeVar = $route.current.customeRouteVar;
        var routeWithOldURLQuestionMarkParams = $route.current.params.paramName;
        var routeWithPathParams = $route.current.pathParams.paramName;  //only includes the route params, nothing else

        //reload just the view rather than the entire application
        $scope.reload = function(){
            $route.reload();
        }
    });
