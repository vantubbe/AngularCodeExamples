'use strict';

//Defining a directive with a inline contained controller
angular.module('myApp')
    .directive('mySelfContainedInlineControllerDirective', function () {
        return {
            restrict: 'E',
            replace: true,
            template: "<button class='btn' ng-click='sayHello()'>Say Hello</button>",
            controller: function ($scope) {
                $scope.sayHello = function () {
                    alert('Hello');
                }
            }
        };
    });

//defining a directive with a referenced controller
angular.module('myApp')
    .directive('mySelfContainedReferencedControllerDirective', function () {
        return {
            restrict: 'E',
            replace: true,
            template: "<button class='btn' ng-click='sayHello()'>Say Hello</button>",
            controller: "greetingController"
        };
    });

angular.module('myApp')
    .controller('greetingController',
    function GreetingController($scope) {
        $scope.sayHello = function () {
            alert('Hello');
        }
    });

//defining a directive where the controller can be injected via an attribute on html where the directive element is used
angular.module('myApp')
    .directive('mySelfContainedInjectedControllerDirective', function () {
        return {
            restrict: 'E',
            replace: true,
            template: "<button class='btn' ng-click='sayHello()'>Say Hello</button>",
            controller: "@",
            name: "nameOfTheAttributeThatWillHaveTheControllerName"
        };
    });