//this shows directives communicating with each other using a common controller

angular.module('myApp')
    .directive('greeting', function () {
        return {
            restrict: 'E',
            replace: true,
            transclude: true, //needed if child elements want to use this directive's controller
            //divs are needed for transclusion
            template: "<div></div><button class='btn' ng-click='sayHello()'>Say Hello</button><div ng-transclude></div></div>",
            controller: function ($scope) {
                var greetings = ['hello'];
                $scope.sayHello = function () {
                    alert(greetings.join());
                }
                this.addGreeting = function(greeting) {
                    greetings.push(greeting)
                }
            }
        };
    });

angular.module('myApp')
    .directive('finnish', function () {
        return {
            restrict: 'A',
            priority: 1, //this directive will execute first, if you have multiple directives, this controls what order they execute in.
            terminal: true, //this will terminate directives with a lower priority than itself. (use negatives sometimes as this may interfere with angular directives
            require: 'greeting', //needs a name of a directive ON THE SAME ELEMENT, that has a controller in it
            require: '^greeting', //this will traverse upwards looking for a greeting directive
            link: function(scope, element, attrs, controller){
                controller.addGreeting('hei');
            }
        }
    });

angular.module('myApp')
    .directive('hindi', function () {
        return {
            restrict: 'A',
            require: 'greeting' //needs a name of a directive that has a controller in it
        }
    });