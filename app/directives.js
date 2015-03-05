'use strict';

/*  directives are kind of like user controls in web forms.  You can encapsulate logic and html within a directive tag
 and then use it across the application.
 */

angular.module('myApp')
    .directive('myCustomButton', function ($compile) {
        return {
            restrict: 'E', //default is A for attribute, as in this directive is an attribute directive.
            //E is for element.
            //C for class
            //M for comment
            link: function (scope, element, attrs, controller) {
                var markup = "<input type='text' ng-model='sampleData' /> {{sampleData}}<br/>";
                angular.element(element).html($compile(markup)(scope));
            },

            //you can bypass all the link complexity and just use template to do the same thing as above, and you only
            //need the html, it will compile automatically.
            template: "<input type='text' ng-model='sampleData' /> {{sampleData}}<br/>",

            //You can also point it at a file rather than having a ton of html in here
            templateUrl: "/view1/view1.html",

            //this will replace the myCustomButton html with valid html.
            replace: true,

            //this will give each control it's own scope, without this, if you had more than one of these
            //controls on a page, they would share the same scope and variables.
            //in this control that would be {{sampleData}}
            //NOTE: This does not inherit prototypically, meaning it could break things that rely on the parent scope.
            // to fix this, you would need to include properties in the scope, and then set them in the html
            //where this directive is used

            //Another note about these functions, the function upvote would live in the controller, and be passed to the
            //directive through an attribute (upvote) when used.
            scope: {
                event: '=event', // = for property - don't need name if names match, can just put '='
                upvote: '&' //& for function that is executed in the parent scope
                //@ is used for strings, you would need to use angular evaluation eg {{var}}
            }
        };
    })
    .directive('myDateValidator', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs, controller) {
                element.on('keydown', function () {
                    if (isValidDateKey())
                        return true;
                    return false;
                });
            }
        }
    })
    .directive('gravitar', function (urlBuilderService, newParam) {
        return {
            restrict: 'E',
            template: '<img />',
            replace: true,
            link: function (scope, element, attrs, controller) {
                attrs.$observe('email',function(newvalue,oldvalue){
                   attrs.$set('src', urlBuilderService.buildURL(newValue));
                });
            }

        }
    });


