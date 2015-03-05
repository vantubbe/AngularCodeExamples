angular.module('myApp')
    .directive('datePicker', function () {
        return {
            restrict: 'A',
            link: function(scope, element)
            {
                element.datepicker();
            }
        }
    });
